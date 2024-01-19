using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Authorize]
[Route("[controller]")]
public class LifeLineController : ControllerBase
{
    public LifeLineController() { }

    [HttpGet]
    public ActionResult<string> Get()
    {
        return Ok("Hi the api is alive");
    }
}
