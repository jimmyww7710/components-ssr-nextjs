import Image from 'next/image'
import ProductPage from './components/productPage'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="./user">user info</Link>
      <h1>Hi Jimmy, Do you want to buy something?</h1>
      <ProductPage />
    </main>
  )
}
