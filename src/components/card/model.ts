export interface CardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  showDetails?: boolean;
  showAddCart?: boolean;
  counterItems?: number;
}
