using System;
using IRAAPI.COMMON;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class ParentBLL
    {
        public int VerifyParent(string cnic, string password)
        {
            return new ParentDAL().VerifyParent(cnic, password);
        }

        public Parent GetParentInfoById(int parent_Id)
        {
            return new ParentDAL().GetParentInfoById(parent_Id);
        }
    }
}
