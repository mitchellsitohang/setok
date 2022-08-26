public class ItemDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
    public string Image { get; set; }
    public string Category { get; set; }

    public override string ToString()
    {
        return $"ItemDto Id: {Id}, Name: {Name}, Description: {Description}, Price: {Price}, Quantity: {Quantity}, Image: {Image}, Category: {Category}";
    }
}