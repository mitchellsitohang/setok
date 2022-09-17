
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ItemController : ControllerBase, IHasLogger
{
    private readonly ILoggerService<ItemController> logger;
    private readonly IItemService itemService;

    public ItemController(ILoggerService<ItemController> logger, IItemService itemService)
    {
        this.logger = logger;
        this.itemService = itemService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ItemDto>>> Get()
    {
        using(logger.BeginScope(nameof(Get))) 
        {
            return Ok((await itemService.GetItemsAsync()).ToList());
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ItemDto>> Get(int id)
    {
        using(logger.BeginScope(nameof(Get))) 
        {
            return Ok(await itemService.GetItemAsync(id));
        }
    }
    
    [HttpPost]
    public async Task<ActionResult<ItemDto>> Post(ItemDto item)
    {
        using(logger.BeginScope(nameof(Post)))
        {
            return Ok(await itemService.CreateItemAsync(item));
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ItemDto>> Put(int id, ItemDto item)
    {
        return Ok(await itemService.UpdateItemAsync(id, item));
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<ItemDto?>> Delete(int id)
    {
        return Ok(await itemService.DeleteItemAsync(id));
    }
}