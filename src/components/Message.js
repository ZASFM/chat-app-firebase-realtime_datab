import React from "react";
import { auth } from "../firebase";

const style={
   message:`flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full`,
   name:`absolute mt-[-4rem] text-gray-600 text-xs`,
   sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
   received:`bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

const Message=(props)=>{
   const messageClass=
   props.message.id===auth.currentUser.uid?
   `${style.sent}`:`${style.received}`;
   return (
      <div>
         <div className={`${style.message} ${auth.currentUser && messageClass}`}>
            <p className={style.name}>{props.message.name}</p>
            <p>{props.message.text}</p>
         </div>
      </div>
   )
}

export default Message;