import { headers } from "@/next.config";

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return Response.json({data})
}