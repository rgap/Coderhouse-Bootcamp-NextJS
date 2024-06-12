import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsPage() {
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();

  const cookieStore = cookies();
  const theme = cookies.get("theme");
  // after this dynamic function (cookies), the fetches will not be cached

  const detailsResponse = await fetch("http://localhost:3001/products/1");
  const details = await detailsResponse.json();

  // after a "no-store", it will not cache every other fetched data
  // const detailsResponse = await fetch("http://localhost:3001/products/1");
  // const details = await detailsResponse.json();

  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.price}</p>
        </li>
      ))}
    </ul>
  );
}
