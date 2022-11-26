import React,{useState,useEffect,useRef} from "react";
import Message from "./Message";
import {collection,onSnapshot,query,orderBy} from 'firebase/firestore';
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const style={
   main:`flex flex-col p-[10px] relative `,
}

const Chat=()=>{
   const scroll=useRef();
   
   const [messages,setMessages]=useState([]);
   console.log(messages);
   
   useEffect(()=>{
      const q=query(collection(db,'messages'),orderBy('timestamp'));
      const unsubscribe=onSnapshot(q,(snapShot)=>{
         const messages=[];
         snapShot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id});
         })
         setMessages(messages);

      })
      return ()=>unsubscribe();
   },[])

   return (
      <div>
         <main className={style.main}>
            {messages && messages.map(message=>{
               return (
                  <Message
                     key={message.id}
                     message={message}
                  />
               )
            })}
         </main>
         <SendMessage
            scroll={scroll}
         />
         <span ref={scroll}></span>
      </div>
   )
}

export default Chat;