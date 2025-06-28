import { Header } from '@/components/header'
import {Outlet} from 'react-router-dom'

export const PublicLayout= () => {
  return (
    <div className="w-full">
        <Header/>
        <Outlet/>
        <h1>Footer</h1>
    </div>
  )
}
