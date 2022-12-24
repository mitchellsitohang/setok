using System.ComponentModel.DataAnnotations;

public class ItemDto
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    [Required]
    public decimal Price { get; set; }
    [Required]
    public int Quantity { get; set; }
    public string? Image { get; set; }
    [Required]
    public string Category { get; set; } = string.Empty;

    public override string ToString()
    {
        return $"ItemDto Id: {Id}, Name: {Name}, Description: {Description}, Price: {Price}, Quantity: {Quantity}, Image: {Image}, Category: {Category}";
    }
}