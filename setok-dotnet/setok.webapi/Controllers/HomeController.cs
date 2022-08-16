using Microsoft.AspNetCore.Mvc;

namespace setok_api_dotnet.Controllers;

[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    private readonly ILogger<HomeController> _logger;
    private IMessageService _messageService { get; set;}

    public HomeController(ILogger<HomeController> logger, IMessageService messageService)
    {
        _messageService = messageService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Message>>> Get()
    {
        return Ok((await _messageService.GetMessagesAsync()).ToList());
    }

    [HttpPost]
    public async Task<ActionResult<SetokResult>> Post(string message)
    {
        var result = await _messageService.CreateMessageAsync(message);

        return result ? new SetokResult($"Added message: {message}") : BadRequest();
    }
}
