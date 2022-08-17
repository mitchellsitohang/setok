using AutoMapper;

public class SetokProfile : Profile
{
	public SetokProfile()
	{
		CreateMap<ItemDto, Item>();
		CreateMap<Item, ItemDto>();
	}
}