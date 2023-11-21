import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch('https://fakestoreapi.com/products', {
    next: {
      revalidate: 60
    }
  });
  
  return response.json();
}

export default async function Products() {
  const products = await getData();

  let productList = products.map(product => {
    return(
      <div className="w-1/5 grow-0 shrink-0 bg-base-100 shadow-xl" key={product.id}>
        <figure className="bg-white py-4">
          <img className="object-cover mx-auto h-24 w-100" src={product.image} alt="Shoes" />
          {/* <Image 
            className="object-contain mx-auto aspect-video" alt="Shoes" 
            src={product.image}
            width={200}
            height={110}
          /> */}
        </figure>
        <div className="">
          <h2 className="">{product.title}</h2>
          <div className="text-center">
          <Link className="bg-slate-100 text-slate-800 px-4 py-2 mt-2 inline-block" href={`/products/${product.id}`}>
            Details
          </Link>
          </div>
        </div>
      </div>
    )
  })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl">
        <h3>These are my products</h3>
        <div className="flex flex-wrap max-w-screen-lg justify-center gap-4 m-4">
          {productList}
        </div>
      </div>
    </main>
  )
}