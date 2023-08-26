import Image from 'next/image'
import Header from './components/Header'
// import Home from './home/Home'
import Landing from './home/Home'

export default function Home() {
  return (
    <main data-theme="dark">
      <Header/>
      <Landing/>
    </main>
  )
}
