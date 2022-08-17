import { ItemDto } from "../api/models";

export class Item implements ItemDto {
  category?: null | string;
  description?: null | string;
  id?: number;
  image?: null | string;
  name?: null | string;
  price?: number;
  quantity?: number;

  constructor() {
    this.category = null;
    this.description = null;
    this.image = null;
    this.name = null;
  }

  MapFromDto(itemdto: ItemDto) : Item {
    this.category = itemdto.category;
    this.description = itemdto.description;
    this.id = itemdto.id;
    this.image = itemdto.image;
    this.name = itemdto.name;
    this.price = itemdto.price;
    this.quantity = itemdto.quantity;
    return this;
  }

  MapToDto(): ItemDto {
    const itemdto = {} as ItemDto;
    itemdto.category = this.category;
    itemdto.description = this.description;
    itemdto.id = this.id;
    itemdto.image = this.image;
    itemdto.name = this.name;
    itemdto.price = this.price;
    itemdto.quantity = this.quantity;
    return itemdto;
  }
}
