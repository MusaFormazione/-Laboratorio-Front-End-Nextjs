export async function GET(request, { params }) {
  const { id } = params;
  console.log(params)
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    // next: {revalidate: 20},
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}