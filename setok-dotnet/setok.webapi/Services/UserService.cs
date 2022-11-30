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
            var userDto = Mapper.Map<UserDto>(usersAsync.Current);
            users.Add(userDto);
        }

        return users;
    }

    public async Task<UserDto> CreateUserAsync(UserDto userDto)
    {
        var user = Mapper.Map<User>(userDto);
        var addedUser = (await DbContext.AddAsync(user)).Entity;
        await DbContext.SaveChangesAsync();
        return Mapper.Map<UserDto>(user);
    }
}