import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth';

const style={
  appContainer:`mx-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

const App=()=>{
  const [user]=useAuthState(auth);
  console.log(user);
  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>
         <Navbar/>
      </div>
    </div>
  )
}

export default App;