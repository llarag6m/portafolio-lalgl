const About_me = () => {
  return (

      <section className="bg-fond1 bg-cover min-h-screen text-white p-28 flex justify-center items-center gap-[100px] parallax md: min-w-[860px] " id="Sobre_mi">
        <div className="shadow-lg shadow-slate-100 border-[2px] border-black w-full h-full rounded-xl ">
            <img className="w-full h-full rounded-xl overflow-hidden md: relative mx-auto min-h-[300px] min-w-[190px]" src="/img/perfil.png" alt="" />
        </div>

        <div className="shadow-lg shadow-white bg-gray-700/50 p-5 ">
            <h1 className="font-extrabold text-4xl">Sobre <span className="text-blue-500">Mi!</span></h1>
            <h3 className="font-bold text-4xl leading-loose">Fronted developer</h3>
            <p className=" font-semibold leading-7 text-justify p-10">Tengo 25 años de edad me gusta me especializo en la creacion del desarrollo
            de paginas Web utilizado herramientas y librerias para el buen diseño de la pagina. Continuo aprendiendo haciendo proyectos para asi 
            reforzar mas mis habilidades. Me gusta escuchar musica , ver peliculas y series, me gusta trabajar en equipo
            apoyar a los demas y seguir mejorando</p>
            <a className="flex justify-center bg-black rounded-3xl p-[10px] w-[150px] ml-[45%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold" href="">Leer mas</a>
        </div>
      </section>

  )
}
export default About_me