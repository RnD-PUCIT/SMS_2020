using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IRAAPI.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace IRAAPI.Controllers
{

    [Route("feechallan")]
    [ApiController]
    public class FeeChallansController : ControllerBase
    {
        //private readonly IRAAPIContext _context;
        private readonly IMapper _mapper;
        public FeeChallansController(IMapper mapper)
        {
            _mapper = mapper;
        }
        private readonly IRAAPIContext _context = new IRAAPIContext();
        // GET: api/FeeChallans

        //public async Task<ActionResult<IEnumerable<FeeChallan>>> GetFeeChallans()
        //{
        //    return await _context.FeeChallans.ToListAsync();
        //}

        // GET: api/FeeChallans/5
        [Authorize]
        [HttpGet]
        public Object GetFeeChallan(Guid studentid, Guid classid)
        {
            int studentId = _context.Students.Where(a => a.Guid == studentid).Select(a => a.Id).SingleOrDefault();
            int classId = _context.Classes.Where(a => a.Guid == classid).Select(a => a.Id).SingleOrDefault();
            try
            {
                Student tempStudent = _context.Students.Where(a => a.Id == studentId).SingleOrDefault();
                STDDTO student = _mapper.Map<STDDTO>(tempStudent);
           
                Class tempClass = _context.Classes.Where(a => a.Id == classId).SingleOrDefault();
                ClassDTO classs = _mapper.Map<ClassDTO>(tempClass);



                FeeChallan unPaidFeeForm = _context.FeeChallans.Where(a => a.StudentId == studentId && a.IsPaid == false && a.IssueDate.Month == DateTime.Today.Month && a.IssueDate.Year == DateTime.Today.Year).FirstOrDefault();
                if (unPaidFeeForm == null)
                {
                    return BadRequest("Your current challan may not be uploaded.You may check later. ");
                }
                var unPaidpendingFeeList = _context.FeeChallans.Where(a => a.StudentId == studentId && a.IsPaid == false && !(a.IssueDate.Month == DateTime.Today.Month)).ToList();
                Charge amount = _context.Charges.Where(a => a.ClassId == classId).FirstOrDefault();

                var bankinfo = _context.BankDetails.FirstOrDefault();
                BankDetailDTO bankData = _mapper.Map<BankDetailDTO>(bankinfo);
                ChargeDTO Fee = _mapper.Map<ChargeDTO>(amount);
               
                List<FeeChallan> pendingFeeList = (List<FeeChallan>)(unPaidpendingFeeList);
                int sum = pendingFeeList.Count();
                unPaidFeeForm.UnpaidCharges = sum * Fee.Amount;
                _context.SaveChanges();


                FeeChallanDTO challan = _mapper.Map<FeeChallanDTO>(unPaidFeeForm);
                
                FeeChallanObject ww = new FeeChallanObject { feeInfo = challan, bankInfo = bankData, charges = Fee, studentInfo = student, classInfo = classs };
                return ww;
            }
            catch (Exception ex)
            {
                return BadRequest("You do not have Unpaid Fee Charges in your account.It may need Updation. ");
            }
        }

        // PUT: api/FeeChallans/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeeChallan(int id, FeeChallan feeChallan)
        {
            if (id != feeChallan.Id)
            {
                return BadRequest();
            }

            _context.Entry(feeChallan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeeChallanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FeeChallans
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FeeChallan>> PostFeeChallan(FeeChallan feeChallan)
        {
            _context.FeeChallans.Add(feeChallan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeeChallan", new { id = feeChallan.Id }, feeChallan);
        }

        // DELETE: api/FeeChallans/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FeeChallan>> DeleteFeeChallan(int id)
        {
            var feeChallan = await _context.FeeChallans.FindAsync(id);
            if (feeChallan == null)
            {
                return NotFound();
            }

            _context.FeeChallans.Remove(feeChallan);
            await _context.SaveChangesAsync();

            return feeChallan;
        }

        private bool FeeChallanExists(int id)
        {
            return _context.FeeChallans.Any(e => e.Id == id);
        }
    }
    public class FeeChallanObject
    {
        public FeeChallanDTO feeInfo { get; set; }
        public ChargeDTO charges { get; set; }
        public BankDetailDTO bankInfo { get; set; }
        public STDDTO studentInfo { get; set; }
        public ClassDTO classInfo { get; set; }
    }
}
