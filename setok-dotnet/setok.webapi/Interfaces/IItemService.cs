public interface IItemService
{
    Task<IEnumerable<ItemDto>> GetItemsAsync();
    Task<IEnumerable<ItemDto>> GetItemAsync(int id);
    Task<ItemDto> CreateItemAsync(ItemDto item);
    Task<ItemDto> UpdateItemAsync(int id, ItemDto item);
    Task<ItemDto> DeleteItemAsync(int id);
}