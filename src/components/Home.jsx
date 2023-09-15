const Home = () => {


  return (

      <section className="flex p-28 justify-center items-center bg-fond  bg-cover flex-wrap-reverse parallax sm: min-w-[360px]" id="Home">
        <div className="grid text-white shadow-md shadow-gray-500 bg-slate-700/50 rounded-md p-5 md: max-w-[1000px] ">
            <h1 className="font-extrabold text-4xl dark:text-black">Hola me llamo</h1>
            <h3 className="font-bold text-6xl leading-loose">Luis Alberto Lara Gonzalez</h3>
            <h2 className="font-extrabold text-3xl">Soy un desarrollador<span className="text-blue-800 write-machine font-extrabold">Junior Developer Full Stack</span></h2>
          
            <br />

            <div className="inline-flex justify-center"> 
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black animate-bounce transition delay-150 duration-300 ease-in-out" href="https://github.com/llarag6m" target="_blank"><i className='bx bxl-github text-2xl'></i></a> 
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-green-500 shadow-lg hover:shadow-cyan-400 hover:text-black animate-bounce transition delay-150 duration-300 ease-in-out" href="https://wa.me/2215313503?text=Comuninicate_conmigo_para_mas_datelles " target="_blank"><i className='bx bxl-whatsapp text-2xl'></i></a>
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-blue-600 shadow-lg hover:shadow-cyan-400 hover:text-black animate-bounce transition delay-150 duration-300 ease-in-out" href="https://www.linkedin.com/in/luis-alberto-lara-gonzalez-a3a4b7291/" target="_blank"><i className='bx bxl-linkedin text-2xl'></i></a>
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-red-600 shadow-lg hover:shadow-cyan-400 hover:text-black animate-bounce transition delay-150 duration-300 ease-in-out" href="mailto:l.al98@hotmail.com" target="_blank"><i className='bx bxs-envelope text-2xl'></i></a>
                <h1><i className='bx bxs-left-arrow text-2xl flex justify-center items-center animate-bounce'>Contactame</i></h1>
            </div>
            

            <div className="flex ">
              <button className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[190px] h-12 ml-[35%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold"><a href="/download/CV_Luis Alberto_Desarrolllador_Web.pdf" target="_blank" >Descargar CV</a></button>
            </div>
        </div>
  {/*
        <div className="min-w-[550px] h-[500px] flex justify-center">
          <img className="m-10 shadow-slate-500 shadow-2xl rounded-full border-[2px] border-slate-400 overflow-hidden" src="/img/perfil.png" alt="" />
        </div>
  */}
      </section>

  )
}
export default Home