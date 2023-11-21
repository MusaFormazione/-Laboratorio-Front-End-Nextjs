import { headers } from "@/next.config";

export async function GET(request, {params}) {

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return Response.json({data})
}