'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Header() {
  const pathName = usePathname();
  
  return (
    <header className="p-4 bg-slate-800 flex gap-4">
      <Link 
        href='/'
        className={`px-4 py-2 ${pathName === '/' ? 'bg-teal-500' : 'bg-violet-600'}`}
      >
        My test
      </Link>
      <Link 
        href='/products' 
        className={`px-4 py-2 ${pathName === '/products' ? 'bg-teal-500' : 'bg-violet-600'}`}
      >
        Products
      </Link>
      <Link 
        href='/image-test'
        className={`px-4 py-2 ${pathName === '/image-test' ? 'bg-teal-500' : 'bg-violet-600'}`}
      >
        Images
      </Link>
    </header>
  )
}