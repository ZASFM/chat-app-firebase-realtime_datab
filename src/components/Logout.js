import React from "react";
import { auth } from "../firebase";
import {signOut} from 'firebase/auth';

const style={
   button:`bg-gray-200 px-4 `,
}

const LogOut=()=>{

   const singOutFromAccount=()=>{
      signOut(auth);
   }

   return (
      <button className={style.button} onClick={singOutFromAccount}>
         Log out
      </button>
   )
}

export default LogOut;