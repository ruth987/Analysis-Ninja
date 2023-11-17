import Image from 'next/image'
import Hero from '@/components/landingPage/Hero'
import Signup from '@/components/entryPage/Signup'
import Login from '@/components/entryPage/Login'
import User from '@/components/dashboard/User'

export default function Home() {
  return (
    <main>
     {/* <Hero/> */}
     {/* <Signup />
     <Login /> */}
     <User />
    </main>
  )
}
