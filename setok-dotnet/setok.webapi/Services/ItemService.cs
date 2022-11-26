using AutoMapper;

public class ItemService : IItemService, IHasLogger
{
    private SetokContext DbContext { get; }
    private IMapper Mapper { get; }
    private ILoggerService<ItemController>  Logger { get; }

    public ItemService(SetokContext dbContext, IMapper mapper, ILoggerService<ItemController> logger)
    {
        DbContext = dbContext;
        Mapper = mapper;
        Logger = logger;
    }

    public async Task<ItemDto> CreateItemAsync(ItemDto item)
    {
        var entityAdded = (await DbContext.AddAsync(Mapper.Map<Item>(item))).Entity;
        await DbContext.SaveChangesAsync();

        return new ItemDto() {
            Id = entityAdded.Id,
            Category = entityAdded.Category,
            Description = entityAdded.Description,
            Image = entityAdded.Image,
            Name = entityAdded.Name,
            Price = entityAdded.Price,
            Quantity = entityAdded.Quantity
        };
    }

    public async Task<ItemDto?> DeleteItemAsync(int id)
    {
        Item? item = await DbContext.Items.FindAsync(id);
        if(item != null) 
        {
            DbContext.Items.Remove(item);
            await DbContext.SaveChangesAsync();
            return Mapper?.Map<ItemDto>(item);
        }
        return null;
    }

    public Task<IEnumerable<ItemDto>> GetItemAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<ItemDto>> GetItemsAsync()
    {
        var items = new List<ItemDto>();
        var itemsAsync = DbContext.Items.GetAsyncEnumerator();
        while (await itemsAsync.MoveNextAsync())
        {
            items.Add(Mapper.Map<ItemDto>(itemsAsync.Current));
        }
        return items;
    }

    public Task<ItemDto> UpdateItemAsync(int id, ItemDto item)
    {
        throw new NotImplementedException();
    }
}