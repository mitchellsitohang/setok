using System.ComponentModel.DataAnnotations;

public class RegistrationDto
{
    public int Id { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Pass { get; set; }
    [Required]
    public string PassValidation { get; set; }
    [Required]
    public string Zipcode { get; set; }
    [Required]
    public string Streetname { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public string Country { get; set; } 
    [Required]
    public int Phone { get; set; }

    public override string ToString()
    {
        return $"RegistrationDto Email: {Email}, Pass: {Pass}, PassValidation: {PassValidation}, Zipcode: {Zipcode}, Streetname: {Streetname}, City: {City}, Country: {Country}, Phone: {Phone}";
    }

    public RegistrationDto() 
    { 
        Email = string.Empty;
        Pass = string.Empty;
        PassValidation = string.Empty;
        Zipcode = string.Empty;
        Streetname = string.Empty;
        City = string.Empty;
        Country = string.Empty;
        Phone = default;
    }

    public RegistrationDto(string email, string pass, string passValidation, string zipcode, string streetname, string city, string country, int phone)
    {
        Email = email;
        Pass = pass;
        PassValidation = passValidation;
        Zipcode = zipcode;
        Streetname = streetname;
        City = city;
        Country = country;
        Phone = phone;
    }
}