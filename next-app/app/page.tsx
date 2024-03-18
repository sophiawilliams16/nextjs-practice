import Image from 'next/image'
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main>
      <NavBar />
      <br />
      <br />
      <ProductCard />
    </main>
  )
}
