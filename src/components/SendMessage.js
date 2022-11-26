import React, { useState } from "react";
import {collection,addDoc,serverTimestamp} from 'firebase/firestore';
import { db,auth } from "../firebase";

const style={
   form:`h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
   input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
   button:`w-[20%] bg-green-500`,
}

const SendMessage=(props)=>{
   const [input,setInput]=useState('');

   const sendMessage=async (e)=>{
      e.preventDefault();
      if(!input){
         alert('Please write a message');
         return;
      }
      const {uid,displayName}=auth.currentUser;
      try{
         await addDoc(collection(db,'messages'),{
            text:input,
            name:displayName,
            uid,
            timestamp:serverTimestamp(),
         })
         setInput('');
         props.scroll.current.scrollIntoView({behavior:'smooth'});
      }
      catch(error){
         console.log(error.message);
      }
      finally{
         console.log('Process Send message ended');
      }
   }

   return (
      <form className={style.form} onSubmit={sendMessage}>
         <input 
            placeholder="Type your message here"
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className={style.input}
         />

         <input
            className={style.button}
            value="Send"
            type="submit"
         />
      </form>
   )
}

export default SendMessage;