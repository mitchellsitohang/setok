public interface IRegistrationService
{
    Task<List<RegistrationDto>> GetAllAsync();
    Task<RegistrationDto> GetAsync(int id);
    Task<RegistrationDto> RegisterAsync(RegistrationDto registration);
}