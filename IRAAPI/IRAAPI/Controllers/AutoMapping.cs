using AutoMapper;
using IRAAPI.Dtos;
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
        CreateMap<LectureContentFile, LectureContentFileDTO>();
        CreateMap<CourseOutline, CourseOutlineDTO>();
        CreateMap<Class, ClassDto>().ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Guid));

        // means you want to map from User to UserDTO
    }
}