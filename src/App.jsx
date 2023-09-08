import { useState } from 'react'
import './App.css'
import About_me from './components/About_me'
import Contact from './components/Contact'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Services from './components/Services'

function App() {

  const handlechangemenu = () =>{

    const menuIcon = document.querySelector('#menu-icon');
    const navbarMenu = document.querySelector('.navbar');
    
      menuIcon.classList.toggle('bx-x')
      navbarMenu.classList.toggle('close')
  }

  return (
    <main className=''> 
      <header className='fixed z-20 bg-slate-900  justify-between items-center min-w-[360px] text-white p-5 w-[100%] flex shadow-md shadow-slate-900 pos'>
        <a className='font-extrabold text-2xl cursor-default outline-none' href="#Home">Portafolio</a>

        <i onClick={handlechangemenu} className='bx bx-menu font-bold text-2xl' id='menu-icon'></i> 

        <nav className='navbar'>
          <ul>
            <a className='text-sky-400 font-semibold ml-16 hover:text-sky-400 duration-300 scroll-smooth' href="#Home">Home</a>
            <a className='font-semibold ml-16 hover:text-sky-400 duration-300 scroll-smooth ' href="#Sobre_mi">Sobre mi</a>
            <a className='font-semibold ml-16 hover:text-sky-400 duration-300 scroll-smooth ' href="#Servicios">Servicios</a>
            <a className='font-semibold ml-16 hover:text-sky-400 duration-300 scroll-smooth ' href="#Proyectos">Proyectos</a>
            <a className='font-semibold ml-16 hover:text-sky-400 duration-300 scroll-smooth ' href="#Contacto">Contacto</a>
          </ul>
        </nav>
      </header>

      <Home />
      <About_me />
      <Services />
      <Proyects />
      <Contact />

      <footer className='bg-gray-800 flex justify-between items-center flex-wrap p-3 min-w-[860px]'>
        <div className='text-white font-bold'>
          <p className='pl-20'>Portafolio 2023 by Luis Alberto Lara Gonzalez | All Right Reserved</p>
        </div>

        <div>
          <a className=' text-white inline-flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black font-bold ' href="#Home"><i className='bx bxs-up-arrow-circle text-5xl'></i></a>
        </div>
      </footer>
    </main>
  )
}

export default App
