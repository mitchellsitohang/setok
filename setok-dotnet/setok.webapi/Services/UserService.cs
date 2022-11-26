using AutoMapper;

public class UserService : IUserService
{
    private SetokContext DbContext { get; }
    private IMapper Mapper { get; }

    public UserService(SetokContext dbContext, IMapper mapper)
    {
        DbContext = dbContext;
        Mapper = mapper;
    }

    public async Task<IEnumerable<UserDto>> GetUsersAsync()
    {
        var users = new List<UserDto>();
        var usersAsync = DbContext.Users.GetAsyncEnumerator();
        
        while (await usersAsync.MoveNextAsync())
        {
            users.Add(new UserDto{
                Email = usersAsync.Current.Email,
                Password = usersAsync.Current.Password,
                Id = usersAsync.Current.Id
            });
        }

        return users;
    }

    public async Task<UserDto> CreateUserAsync(UserDto userDto)
    {
        var user = new User {
            Email = userDto.Email,
            Password = userDto.Password 
        };
        
        var addedUser = (await DbContext.AddAsync(user)).Entity;
        await DbContext.SaveChangesAsync();

        return new UserDto 
        {
            Id = addedUser.Id,
            Email = addedUser.Email,
            Password = addedUser.Password
        };
    }
}