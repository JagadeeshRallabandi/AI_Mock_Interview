import { Header } from '@/components/header'
import AuthHandler from '@/handlers/user-auth-handler'
import {Outlet} from 'react-router-dom'

export const PublicLayout= () => {
  return (
    <div className="w-full">
        <AuthHandler/>
        <Header/>
        <Outlet/>
        <h1>Footer</h1>
    </div>
  )
}
