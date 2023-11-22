import Loading from './loading'
import { Suspense } from 'react'

export default function Layout({ children }) {
  return (
    <div className="bg-slate-600">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  )
}