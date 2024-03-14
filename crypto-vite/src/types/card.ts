interface ICard {
  id: string;
  name: string;
  current_price: number;
  image: string;
  qty?: number | null;
}

export default ICard;
