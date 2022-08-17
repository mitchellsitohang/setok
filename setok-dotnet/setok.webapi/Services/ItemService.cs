using AutoMapper;

public class ItemService : IItemService
{
    private readonly SetokContext dbContext;
    private readonly IMapper mapper;

    public ItemService(SetokContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
    }

    public async Task<ItemDto> CreateItemAsync(ItemDto item)
    {
        await dbContext.AddAsync(mapper.Map<Item>(item));
        await dbContext.SaveChangesAsync();
        return item;
    }

    public async Task<ItemDto> DeleteItemAsync(int id)
    {
        var item = await dbContext.Items.FindAsync(id);
        if (item == null)
        {
            return null;
        }
        dbContext.Items.Remove(item);
        await dbContext.SaveChangesAsync();
        return mapper.Map<ItemDto>(item);
    }

    public Task<IEnumerable<ItemDto>> GetItemAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<ItemDto>> GetItemsAsync()
    {
        var items = new List<ItemDto>();
        var itemsAsync = dbContext.Items.GetAsyncEnumerator();
        while (await itemsAsync.MoveNextAsync())
        {
            items.Add(mapper.Map<ItemDto>(itemsAsync.Current));
        }
        return items;
    }

    public Task<ItemDto> UpdateItemAsync(int id, ItemDto item)
    {
        throw new NotImplementedException();
    }
}