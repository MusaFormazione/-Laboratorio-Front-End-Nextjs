export async function generateStaticParams() {
  const products = await fetch(`https://fakestoreapi.com/products/`).then(res => res.json())

  return products.map(product => {
    id: product.id.toString();
  })
}

async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 60
    }
  });
  
  return response.json();
}

export default async function Product({params}) {
  console.log(params);
  let productDetails = await getProduct(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h3>This is a product: ID {params.id}</h3>
      <div className="bg-slate-800 p-8">
        {/* <p>{productDetails.data.description}</p> */}
        <h2 className="text-xl text-center mb-6">{productDetails.title}</h2>
        <img src={productDetails.image} alt="product image" className="mx-auto"
         />
        {/* <Image src={productDetails.image} alt="product image" className="mx-auto"
          width={300}
          height={300}
         /> */}
        <p>{productDetails.description}</p>
      </div>
    </div>
  )
}