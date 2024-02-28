const simulatedDelay = (data: any) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export const fetchProducts = async () => {
  return simulatedDelay([
    { id: 1, name: "Producto 1", price: 100, image: "url-de-la-imagen-1" },
  ]);
};

export const createProduct = async (product: {
  name: string;
  price: number;
  image: string;
}) => {
  return simulatedDelay({ id: Math.random(), ...product });
};