export interface ProductProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface ProductStateProps {
  items: ProductProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
