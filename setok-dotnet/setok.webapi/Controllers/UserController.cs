using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase, IHasLogger
{
    private readonly IUserService userService;

    public UserController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpPost]
    public async Task<ActionResult<ItemDto>> Post(UserDto user)
    {
        return Ok(await userService.CreateUserAsync(user));
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> Get()
    {
        return Ok((await userService.GetUsersAsync()).ToList());
    }
}