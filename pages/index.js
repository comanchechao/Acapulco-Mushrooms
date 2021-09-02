import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  { useState } from 'react'

export default function Home() {

    const [ mushrooms , setMushrooms ] = useState([
      {title: 'Golden Teacher ' , Description: 'psychadelics some of the most madergah spieces out there' , id: 1},
       {title: 'Albino A+ ' , Description: 'there white fucker will , fuck you up' , id: 2},
        {title: 'Mckennaii ' , Description: 'bluueeeeeeeee miniiiiiiiiis' , id:3}
    ])

  return (
   <div className="bg-red-500 flex justify-center h-screen">
     <div className="grid grid-cols-3 w-full">

     { mushrooms.map((mushroom)=> (
       <div className="bg-Sky-50 flex flex-row border-2 border-purple-500 items-center" key={mushroom.id}>

         <div>

         <h2>{mushroom.title}</h2>
         </div>
       </div>
     ))}
     </div>
     </div>
  )
}
