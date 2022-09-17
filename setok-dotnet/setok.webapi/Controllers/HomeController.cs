using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Authorize]
[Route("[controller]")]
public class HomeController : ControllerBase, IHasLogger
{
    private readonly ILoggerService<HomeController> logger;
    private IMessageService messageService;

    public HomeController(ILoggerService<HomeController> logger, IMessageService messageService)
    {
        this.messageService = messageService;
        this.logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Message>>> Get()
    {
        using(logger.BeginScope(nameof(Get))) 
        {
            return Ok((await messageService.GetMessagesAsync()).ToList());
        }
    }

    [HttpPost]
    public async Task<ActionResult<SetokResult>> Post(string message)
    {
        using(logger.BeginScope(nameof(Post))) 
        {
            var result = await messageService.CreateMessageAsync(message);
            return result ? new SetokResult($"Added message: {message}") : BadRequest("Exception thrown when adding message!");
        }
    }
}
