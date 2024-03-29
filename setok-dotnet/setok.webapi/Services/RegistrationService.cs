public class RegistrationService : IRegistrationService
{
    private readonly SetokContext _context;

    public RegistrationService(SetokContext context)
    {
        _context = context;
    }

    public async Task<List<RegistrationDto>> GetAllAsync()
    {
        var users = (_context.Users.AsAsyncEnumerable());

        var registrationDtos = new List<RegistrationDto>();

        await foreach (var user in users)
        {
            registrationDtos.Add(new RegistrationDto
            {
                Id = user.Id,
                Email = user.Email,
                Pass = user.Pass,
                Zipcode = user.Zipcode,
                Streetname = user.Streetname,
                City = user.City,
                Country = user.Country,
                Phone = user.Phone
            });
        }

        return registrationDtos;
    }

    public async Task<RegistrationDto> GetAsync(int id)
    {
        var user = await _context.FindAsync<User>(id);
        
        if(user == null)
            throw new Exception("User not found");

        return new RegistrationDto
        {
            Id = user.Id,
            Email = user.Email,
            Pass = user.Pass,
            Zipcode = user.Zipcode,
            Streetname = user.Streetname,
            City = user.City,
            Country = user.Country,
            Phone = user.Phone
        };
    }

    public async Task<RegistrationDto> RegisterAsync(RegistrationDto registration)
    {
        var user = await _context.AddAsync<User>(new User
        {
            Id = 0,
            Email = registration.Email,
            Pass = registration.Pass,
            Zipcode = registration.Zipcode,
            Streetname = registration.Streetname,
            City = registration.City,
            Country = registration.Country,
            Phone = registration.Phone
        });

        _context.SaveChanges();

        return new RegistrationDto()
        {
            Id = user.Entity.Id,
            Email = user.Entity.Email,
            Pass = user.Entity.Pass,
            Zipcode = user.Entity.Zipcode,
            Streetname = user.Entity.Streetname,
            City = user.Entity.City,
            Country = user.Entity.Country,
            Phone = user.Entity.Phone
        };
    }
}