const Home = () => {


  return (

      <section className="flex p-28 justify-center items-center bg-fond  bg-cover flex-wrap-reverse parallax sm: min-w-[860px]" id="Home">
        <div className="grid text-white shadow-md shadow-gray-500 bg-slate-700/50 rounded-md p-5 md: max-w-[1000px] ">
            <h1 className="font-extrabold text-4xl">Hola me llamo</h1>
            <h3 className="font-bold text-6xl leading-loose">Luis Alberto Lara Gonzalez</h3>
            <h2 className="font-extrabold text-3xl">Y soy un desarrollador<span className="text-blue-800 write-machine font-extrabold">Fronted Developer</span></h2>
          
            <br />

            <div className="inline-flex "> 
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black" href="#"><i className='bx bxl-facebook-circle'></i></a> 
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black" href="#"><i className='bx bxl-whatsapp'></i></a>
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black" href="#"><i className='bx bxl-linkedin'></i></a>
                <a className="flex justify-center items-center w-[50px] h-[50px] bg-transparent border-cyan-600 border-solid border-[4px] rounded-full m-2 bg-black hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black" href="#"><i className='bx bxl-telegram'></i></a>
            </div>
            

            <div className="flex ">
              <button className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[190px] h-12 ml-[35%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " href="#">Descargar CV</button>
            </div>
        </div>

        <div className="min-w-[550px] h-[500px] flex justify-center">
          <img className="m-10 shadow-slate-500 shadow-2xl rounded-full border-[2px] border-slate-400 overflow-hidden" src="/img/perfil.png" alt="" />
        </div>

      </section>

  )
}
export default Home