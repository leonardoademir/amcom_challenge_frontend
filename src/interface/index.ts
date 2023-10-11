export interface Person {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Product {
  id: number;
  code: string;
  description: string;
  unit_value: number;
  comis_percentage: string; // It appears to be a string in the JSON
}

export interface SelectedProduct {
  quantity: number;
  product: Product;
}

export interface Client {
  id: number;
  id_person: Person;
}

export interface Seller {
  id: number;
  id_person: Person;
}

export interface Sell {
  id: number;
  products: Product[];
  client: Client;
  seller: Seller;
  invoice: string;
  sell_date: string;
}
