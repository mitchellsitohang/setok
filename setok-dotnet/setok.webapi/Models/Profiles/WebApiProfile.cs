using AutoMapper;

public class WebApiProfile : Profile
{
	public WebApiProfile()
	{
		CreateMap<ItemDto, Item>();
		CreateMap<Item, ItemDto>();
		CreateMap<User, UserDto>();
		CreateMap<UserDto, User>();
	}
}