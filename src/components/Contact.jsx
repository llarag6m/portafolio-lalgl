import { useFormAction } from "react-router-dom"
import { EMPTY_FORM_VALUES_USERS } from "../shared/NewMenssage"
import { useForm } from "react-hook-form"
import { mandatoryInputs } from "../services/Name"
import { mandatoryInputsEmail } from "../services/Email"
import { mandatoryInputsNumber } from "../services/Number"

const Contact = () => {

  const {reset, register } = useForm()


  const handleCleanInput = () =>{
    reset(EMPTY_FORM_VALUES_USERS)

    Swal.fire({
      title:"Correo enviado correctamente",
      text: "En breve me comunicare contigo",
      icon: 'success',
      confirmButtonText: "Aceptar",
      timer: 5000,
      timerProgressBar: "true"
  })
  }


  return (
 
    <section className=" w-full bg-fond4 bg-cover min-h-screen text-white p-28 parallax min-w-[860px] " id="Contacto">
        <h1 className="font-extrabold text-4xl mb-[70px] md: p-28 mx-auto flex justify-center ">Contacto por <span className="text-blue-500">Mensaje!</span></h1>

        <form action="" className="bg-gray-500/60 grid gap-8 p-[40px] md: relative max-w-[600px] mx-auto" >

          <div className="grid gap-2">
            <label htmlFor="first_name">Nombre</label>
            <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1 text-black bg-slate-200" id="first_name" type="text" placeholder="Nombre" {...register("first_name", mandatoryInputs)}/>
          </div>

          <div className="grid gap-2 ">
            <label htmlFor="last_name">Apellidos</label>
            <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1 text-black bg-slate-200" type="text" placeholder="Apellidos" {...register("first_name", mandatoryInputs)}/>
          </div>

          <div className="grid gap-2">
            <label htmlFor="email">Correo</label>
            <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1 text-black bg-slate-200" type="email" placeholder="email" {...register("email",mandatoryInputsEmail)}/>
          </div>

          <div className="grid gap-2">
            <label htmlFor="number">Numero telefonico</label>
            <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1 text-black bg-slate-200" type="number" placeholder="Numero de telefono" {...register("number",mandatoryInputsNumber)}/>
          </div>

          <div className="grid gap-2">
            <label htmlFor="Asunto_email">Asunto de correo</label>
            <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1 text-black bg-slate-200" type="text" placeholder="Asunto_email" {...register("Asunto_email", mandatoryInputs)}/>
          </div>

          <div className="grid gap-2">
            <textarea  name="" id="" cols="30" rows="10" className="outline-none bg-slate-200 text-black" placeholder="Escribre tu mensaje"{...register("menssage", mandatoryInputs)}></textarea>
          </div>

          <button onClick={handleCleanInput} className="flex justify-center items-center bg-black rounded-3xl p-[10px] w-[150px] ml-[35%] hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-400 hover:text-black font-semibold " type="button">Enviar Mensaje</button>
        </form>

    </section>





  )
}
export default Contact