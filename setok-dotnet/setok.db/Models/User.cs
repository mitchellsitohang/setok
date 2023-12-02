public class User
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string Pass { get; set; }
    public string Zipcode { get; set; }
    public string Streetname { get; set; }
    public string City { get; set; }
    public string Country { get; set; } 
    public int Phone { get; set; }


    public User() 
    { 
        Email = string.Empty;
        Pass = string.Empty;
        Zipcode = string.Empty;
        Streetname = string.Empty;
        City = string.Empty;
        Country = string.Empty;
        Phone = default;
    }

    public override string ToString()
    {
        return $"User Email: {Email}, Pass: {Pass}, Zipcode: {Zipcode}, Streetname: {Streetname}, City: {City}, Country: {Country}, Phone: {Phone}";
    }
}