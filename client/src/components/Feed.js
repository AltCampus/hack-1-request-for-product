import React from 'react'
import { Link } from 'react-router-dom'
import Aside from './Aside'

class Feed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
         <article className='px-20 py-5 w-full'>
             <section className='feed-part mx-10   flex flex-row'>
                 <div className='filters my-6 rounded  w-60  text-center shadow h-full'>
                     <div className='text-center'>
                         <h1 className='text-2xl text-shadow-sm text-purple-500'>filter section</h1>
                     </div> 
                     <div className='flex flex-col justify-items-center justify-between'>
                         <span className='py-2 text-md text-gray-700'>Today</span>
                         <span className='py-2 text-md text-gray-700'>This week</span>
                         <span className='py-2 text-md text-gray-700'>Last Week</span>
                     </div>
                 </div>
                 <div className='product-cards flex py-2  flex-col mx-5 w-full h-full'>
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                 </div>
             </section>
         </article>
        </>
        )
    }
}



function Card(props){
    return(
        <>
                  <div className='px-4 py-2 my-4 rounded  shadow flex flex-row items-center justify-around  '>
                        <div className=' flex flex-col justify-between '>
                            <img className='w-20 h-20 rounded-full' src='https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='product'></img>

                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-col py-2'>
                                <div className='px-1 leading-5'>
                                    <h2 className='text-2xl py-2 text-red-700'>Lorem ipsum dolor sit amet consectetur adipiscing elit</h2>
                                    <p className='text-sm py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio, pulvinar urna pretium ultricies viverra dis. Cras et mus </p>
                                </div>

                            </div>
                            <div className=' items-center flex flex-row'>
                                 <Link >
                                        <span className='py-6 text-blue-600 '>Read More</span>
                                </Link>
                                <div className='flex mx-10 flex-row'>
                                    <div className='mx-4 text-shadow-xl text-gray-800'>
                                        <i className="fas text-blue-800 fa-tag"></i>
                                        <span >Tech</span>
                                    </div>
                                    <div className='mx-4  text-shadow-xl text-gray-800'>
                                        <i className="fas text-blue-800 fa-tag"></i>
                                        <span >Tech</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>

                            <div className='shadow-xl cursor-pointer flex flex-col items-center mx-5 py-2 px-6'>
                                <h2 className='text-2xl'>1</h2>
                                <button><i className="fas text-2xl fa-chevron-up"></i></button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Feed








                // {/* <article className='mx-10 h-full  flex flex-row'>
                //     <section className='mx-10   flex flex-row justify-between'>
                //         <div className="flex   flex-row justify-between  py-4 rounded-full ">
                //                 <i class="fas relative left-7  top-5 fa-search"></i>
                //                 <input className='w-96  border    shadow-xl  border-gray-500 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent py-4 px-8 rounded-full' type='text' name='keyword' id='keyword'></input>
                //             <button className='text-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md text-white bg-blue-500 px-4 py-4 rounded-r-full  -mx-7'>Search</button>
                //         </div>
                //         <div className='flex px-2 relative -right-10  border shadow-md mx-4 border-gray-400 rounded-full my-4  flex-row items-center'>
                //                 <h2 className='text-xl font-bold mx-2'>Tags</h2>
                //                 <select  className=' text-shadow-md px-4'>
                //                     <option>Telegram Bot</option>
                //                     <option>Telegram Bot</option>
                //                     <option>Telegram Bot</option>
                //                     <option>Telegram Bot</option>
                //                     <option>Telegram Bot</option>
                //                     <option>Telegram Bot</option>
                //                 </select>
                //         </div>
                //     </section>
                // </article> */}
                // <section className='mx-20 flex justify-center items-center flex-initial flex-row my-20'>
                //     <div className='h-full'>
                //         <h2>Sort By</h2>
                //         <div>
                //             <h3>Date & time</h3>
                //         </div>
                //     </div>
                //     <div className='mx-20 w-full'>
                //         <div className='card shadow px-4 h-40 w-full flex flex-col justify-between py-2 '>
                //             <div className='flex-row justify-between flex'>
                //                 <div className='bg-gray-200 p-2 rounded-full w-20 h-20 bg-transparent'>
                //                    <i className="far  text-6xl mx-2 fa-user"></i>
                //                 </div>
                //                 <div>
                //                     <h2>Lorem ipsum dolor sit amet consectetur adipiscing</h2>
                //                     <div>
                //                         <h3>Lorem ipsum dolor sit amet consectetur adipiscing</h3>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className='flex flex-row'>
                //                 <h3>12/02/2021</h3>
                //                 <div className='flex flex-row'>
                //                     <h3>tech</h3>
                //                     <h3>tech</h3>
                //                     <h3>tech</h3>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </section>
                // <section className=' w-96 h-full   mx-8  shadow'>
                //         <Aside />
                // </section>