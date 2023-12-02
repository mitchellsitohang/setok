using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class RegistrationController : ControllerBase
{
    private readonly IRegistrationService registrationService;

    public RegistrationController(IRegistrationService registrationService)
    {
        this.registrationService = registrationService;
    }

    [HttpPost]
    public async Task<ActionResult<RegistrationDto>> Post(RegistrationDto registration)
    {
        return Ok(await registrationService.RegisterAsync(registration));
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<RegistrationDto>>> Get()
    {
        return Ok(await registrationService.GetAllAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<RegistrationDto>> Get(int id)
    {
        return Ok(await registrationService.GetAsync(id));
    }
}