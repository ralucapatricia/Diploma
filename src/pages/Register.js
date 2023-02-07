import { useState } from "react";

import LogIn from "../components/TextRegister";
import TextRegister from "../components/TextRegister";
import CreateUsers from "../util/Auth";

export default function Register(){

   const [isAuthenticating, setIsAuthenticating] = useState(false);

   async function signupHandler({email, password}){
      setIsAuthenticating(true);
      await CreateUsers(email,password);
      setIsAuthenticating(false);
   }

   if(isAuthenticating)
   {
      return <LogIn message="Creating user..."/>
   }
   return <TextRegister onAuthenticate={signupHandler} />
   
}