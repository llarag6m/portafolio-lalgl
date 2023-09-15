const About_me = () => {
  return (

      <section className="bg-fond1 bg-cover min-h-screen text-white p-28 flex justify-center items-center gap-[100px] parallax md: min-w-[860px] " id="Sobre_mi">
       {/* 
        <div className="shadow-lg shadow-slate-100 border-[2px] border-black w-full h-full rounded-xl ">
            <img className="w-full h-full rounded-xl overflow-hidden md: relative mx-auto min-h-[300px] min-w-[190px]" src="/img/perfil.png" alt="" />
        </div>
      */}
        <div className="shadow-lg shadow-white bg-gray-700/50 p-5 ">
            <h1 className="font-extrabold text-4xl text-center">Sobre <span className="text-blue-500">Mi!</span></h1>
            <h3 className="font-bold text-4xl leading-loose text-center">Fronted developer Junior</h3>
            <p className=" font-semibold leading-7 text-justify p-10">Tengo 25 años me desempeño en la creación del desarrollo de páginas Web utilizado herramientas y librerías para el buen diseño de la página. 
            Continúo aprendiendo, haciendo proyectos para así reforzar más mis habilidades desarrollando de forma solida mi desempeño laboral mediante el trabajo en equipo, aportando mis habilidades e ideas en el 
            desarrollo web que permitan el alcance o el logro de objetivos laborales y personales</p>
          {/*  <a className="flex justify-center bg-black rounded-3xl p-[10px] w-[150px] ml-[45%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold" href="">Leer mas</a> */}
        </div>
      </section>

  )
}
export default About_me