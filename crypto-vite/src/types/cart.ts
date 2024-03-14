export type IItems = {
  id: string;
  name: string;
  current_price: number;
  image: string;
  qty?: number | null;
};

export interface ICart {
  items: IItems[];
  totalCartAmount: number;
  totalCartCount: number;
}
