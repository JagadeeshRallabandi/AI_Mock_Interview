import { db } from "@/config/firebase.config";
import { useAuth, useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore"
import type { User } from "@/types";
import { LoaderPage } from "@/views/loader-page";


const AuthHandler = () => {

  const {isSignedIn}=  useAuth();
  const {user} = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const storeUserData = async () =>{
        if(isSignedIn && user){
            try {
               const userSnap = await getDoc(doc(db, "users", user.id))
               if(!userSnap.exists()){
                    const userData : User = {
                            id: user.id,
                            name : user.fullName || user.firstName || "Anonymous",
                            email: user.primaryEmailAddress?.emailAddress || "",
                            imageUrl : user.imageUrl,
                            createdAt : serverTimestamp(),
                            updateAt : serverTimestamp()
                    }
                    await setDoc(doc(db, "users", user.id), userData)
               }
            } catch (error) {
                console.log("Error on storing user data:", error)
            }finally{
                setLoading(false)
            }
        }
    }

    storeUserData()
  },[isSignedIn,user, pathname, navigate])

  if(loading){
    return (
       <LoaderPage/> 
    )
  }

  return (
    null
  )
}

export default AuthHandler