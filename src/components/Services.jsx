const Services = () => {
  return (
    <section className="text-white bg-fond3 min-h-screen bg-cover p-28 parallax min-w-[860px] grid-cols-1" id="Servicios">
        <h1 className="font-extrabold text-4xl mb-[70px] text-center">Manejo de <span className="text-blue-500">Herramientas</span></h1>

        <div className="flex justify-center items-center gap-5 flex-wrap ">

            <div className="bg-gray-600/40 p-5 rounded-2xl text-center border-[5px] transition duration-300 ease-in-out hover:scale-110 hover:border-cyan-400">
            <i className='bg-black rounded-full bx bxl-html5 text-9xl  text-orange-500 mov'></i>
                <h2 className="text-4xl">HTML</h2>
                <h5 className="font-semibold leading-10 text-justify p-10">Lenguaje </h5>
                <a className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[1%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">Leer mas</a>
            </div>

            <div className="bg-gray-600/40 p-5 rounded-2xl text-center border-[5px] transition duration-300 ease-in-out hover:scale-110 hover:border-cyan-400">
            <i className='bg-black rounded-full bx bxl-css3 text-9xl text-blue-500 mov'></i>
                <h2 className="text-4xl">CSS</h2>
                <h5 className="font-semibold leading-10 text-justify p-10">Lenguaje </h5>
                <a className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[1%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">Leer mas</a>
            </div>

            <div className="bg-gray-600/40 p-5 rounded-2xl text-center border-[5px] transition duration-300 ease-in-out hover:scale-110 hover:border-cyan-400">
            <i className ='bg-black rounded-full bx bxl-javascript text-9xl text-yellow-500 mov'></i>
                <h2 className="text-4xl">JavaScript</h2>
                <h5 className="font-semibold leading-10 text-justify p-10">Lenguaje</h5>
                <a className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[1%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">Leer mas</a>
            </div>

            <div className="bg-gray-600/40 p-5 rounded-2xl text-center border-[5px] transition duration-300 ease-in-out hover:scale-110 hover:border-cyan-400">
            <i className='bg-black rounded-full bx bxl-tailwind-css text-9xl text-cyan-400 mov'></i>
                <h2 className="text-4xl">Tailwind</h2>
                <h5 className="font-semibold leading-10 text-justify p-10">Framework</h5>
                <a className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[1%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="https://tailwindcss.com/" target="_blank">Leer mas</a>
            </div>

            <div className="bg-gray-600/40 p-5 rounded-2xl text-center border-[5px] transition duration-300 ease-in-out hover:scale-110 hover:border-cyan-400">
            <i className='bg-black rounded-full bx bxl-react text-9xl text-cyan-300 mov'></i>
                <h2 className="text-4xl">React</h2>
                <h5 className="font-semibold leading-10 text-justify p-10">Libreria</h5>
                <a className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[1%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="https://es.react.dev/" target="_blank">Leer mas</a>
            </div>
        </div>

    </section>
  )
}
export default Services