import React, { Component } from 'react'
import Header from "./Header"
import Hero from "./Hero"
export default class ProductForm extends Component {
    render() {
        return (
            <section className="grid w-full mx-auto container grid-cols-2  font-Cantata">
                <Header />
          <main className="  col-span-2 flex flex-col  w-full    bg-white ">
                <Hero />
                
          </main>
        </section>
        )
    }
}
