using AutoMapper;
using IRAAPI.Models;

public class AutoMapping : Profile
{
    public AutoMapping()
    {
        CreateMap<Announcement, AnnouncementDTO>();
        CreateMap<FeeChallan, FeeChallanDTO>();
        CreateMap<BankDetail, BankDetailDTO>();
        CreateMap<Charge, ChargeDTO>();
        CreateMap<Class, ClassDTO>();
        CreateMap<Student, STDDTO>();
        CreateMap<AcademicCalender, AcademicCalenderDTO>();
     
       

        // means you want to map from User to UserDTO
    }
}