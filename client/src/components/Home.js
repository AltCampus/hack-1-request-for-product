import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import Feed from './Feed'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
             <section className='grid w-full mx-auto container grid-cols-2 font-Balsamiq'>
               <Header />
               <main className='  col-span-2 flex flex-col  w-full    bg-gray-100 '>
                   <Hero />
                   <Feed />
               </main>
             </section>
            </>
        )
    }
}

export default Home