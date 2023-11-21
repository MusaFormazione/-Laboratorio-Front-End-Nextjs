import Image from "next/image"
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'

export default function Page() {
  return(
    <div>
    <div className='aspect-video relative'>
      <Image className="object-contain" alt="Shoes" 
        src={img1} 
        // placeholder="blur" 
        // priority
        // fill
        // width={300}
        // height={300}
        // sizes="100px, 500px, 800px, 1200px"
      />     
    </div>
    <main className="">
      <h2>Images</h2>
      <div className='mt-24'>
        <h3>Gallery</h3>
        <Image className="object-contain my-36" alt="Shoes" 
          src={img2} 
          placeholder="blur" 
          sizes='100px, 500px, 800px, 1200px'
        />    
        <Image className="object-contain my-36" alt="Shoes" 
          src={img2} 
          placeholder="blur"
          sizes='100px, 500px, 800px, 1200px'
        />    
        <Image className="object-contain my-36" alt="Shoes" 
          src={img2} 
          placeholder="blur"
          sizes='100px, 500px, 800px, 1200px'
        />    
        <Image className="object-contain my-36" alt="Shoes" 
          src={img2} 
          placeholder="blur"
          sizes='100px, 500px, 800px, 1200px'
        />    
        <Image className="object-contain my-36" alt="Shoes" 
          src={img2} 
          placeholder="blur"
          width={300}
          height={300}
        />    
        <Image className="object-contain my-36" alt="Shoes" 
          src={img3} 
          placeholder="blur"
          sizes='(max-width: 350px) 350px,(max-width: 500px) 500px,1500px'
        />    
        <div className='relative w-full aspect-video my-36'>
        <Image className="object-contain" alt="Shoes" 
          src={img4} 
          placeholder="blur"
          fill
          // sizes='100px, 500px, 800px, 1200px'
        />    
        </div>
      </div>
    </main>
    </div>
  )
}