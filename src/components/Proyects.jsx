const Proyects = () => {
  return (

    <section className="text-white bg-fond2 min-h-screen bg-cover p-28 parallax min-w-[860px]" id="Proyectos">
        <h1 className="font-extrabold text-4xl mb-[70px] text-center">Proyectos <span className="text-blue-500">Realizados</span></h1>

        <div className="grid gap-4 click shadow-2xl bg-gray-500/40 shadow-white rounded-lg p-5 sm:grid-cols-3">

            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110" src="/public/img/frases.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-1 port">
                    <h1 className="font-extrabold text-4xl">Frases aleatorias</h1>
                    <p className="font-semibold m-4">Una aplicación es que sirva como una página de entretenimiento e información que 
                    muestre aleatoriamente una frase y un fondo al dar click sobre un botón.</p>
                    <div className="inline-flex gap-10">
                       <h6 className="inline-flex items-center gap-4">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://github.com/llarag6m/Proyect_1_React_LALG" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                       <h6 className="inline-flex items-center gap-4">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://space-pharases-proyect-1-lalg.netlify.app/" target="_blank" ><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>


            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110" src="/public/img/clima.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-1 port">
                    <h1 className="font-extrabold text-4xl">App del clima</h1>
                    <p className="font-semibold m-4">Una aplicación que muestra la información sobre el clima en el lugar donde se 
                    encuentra la personas que visita la pagina y ademas de buscar y saber el clima de otros lugares.</p>
                    <div className="inline-flex gap-10">
                       <h6 className="inline-flex items-center gap-4">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="//github.com/llarag6m/Proyect_2_React_LALG" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                       <h6 className="inline-flex items-center gap-4">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://app-weather-lagl.netlify.app/" target="_blank"><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110" src="/public/img/Rick and Morty.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-1 port">
                    <h1 className="font-extrabold text-4xl">Rick and Morty</h1>
                    <p className="font-semibold m-4">Un sitio o aplicacion donde el usuario pueda ver toda la información sobre las ubicaciones 
                    del universo de “Rick and Morty" utilizando listas y Keys, inputs controlados, renderizado condicional. </p>
                    <div className="inline-flex gap-10">
                       <h6 className="inline-flex items-center gap-4">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://github.com/llarag6m/Proyect_3_React_LALG" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                       <h6 className="inline-flex items-center gap-4">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://proyect-3-lalg.netlify.app/" target="_blank"><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110" src="/public/img/Users.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-1 port">
                    <h1 className="font-extrabold text-4xl">Usuarios</h1>
                    <p className="font-semibold m-4">Una aplicación donde se puedan administrar usuarios a través de un CRUD.
                    utilizando metodos HTTP y inputs controlados “React Hook Form”</p>
                    <div className="inline-flex gap-10">
                        <h6 className="inline-flex items-center gap-4">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://github.com/llarag6m/Proyect_4_React_LALG.git" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                        <h6 className="inline-flex items-center gap-4">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://user-crud-lalgl.netlify.app/" target="_blank"><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110 sec" src="/public/img/pokedex.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-4 port">
                    <h1 className="font-extrabold text-4xl">Pokedex</h1>
                    <p className="font-semibold m-4">Una aplicacion que permite ver los 1250 pokemons junto con la informacion
                    de cada pokemon ya sea por nombre o tipo usando React router y Redux.</p>
                    <div className="inline-flex gap-10">
                        <h6 className="inline-flex items-center gap-4">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href=" https://github.com/llarag6m/Proyect_5_React_LALG.git" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                        <h6 className="inline-flex items-center gap-4">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://pokemon-pokedex-lalgl.netlify.app/" target="_blank"><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden h-full w-full rounded-xl ">
                <img className="object-cover object-center overflow-hidden w-full h-full transition duration-300 ease-in-out hover:scale-110 sec" src="/public/img/e-commerce.png" alt="" />
                <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bgfond flex justify-center items-center flex-col text-center p-4  port">
                    <h1 className="font-extrabold text-4xl">E-Commerce</h1>
                    <p className="font-semibold m-4">Desarrollo del proyecto un carrito de compras, usando HTML, CSS y JavaScript, 
                    así como el manejo de el DOM, eventos, localStorage,usando la API fetch para consumir los productos, Flexbox CSS, Grid CSS, 
                    posicionamiento y más. </p>
                    <div className="inline-flex gap-10">
                       <h6 className="inline-flex items-center gap-5">Git Hub<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://github.com/llarag6m/Proyecto_Final_Luis_A.git" target="_blank"><i className='bx bxl-github'></i></a></h6> 
                       <h6 className="inline-flex items-center gap-5">Netlify<a className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-[50%] hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400 hover:text-black border-cyan-600 border-solid border-[4px] text-3xl" href="https://e-commerce-final-luis-alg.netlify.app/" target="_blank"><i className='bx bxl-netlify'></i></a></h6> 
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
export default Proyects