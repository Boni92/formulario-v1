import React, { useState } from "react";
import "../recursos/estilo.css"

export default function Formulario() {

  const [form,setForm] = useState({})

  const handleChange = (e)=>{
    setForm({
      ...form, //lo que ya tiene el formulario
      [e.target.name]: e.target.value  //desestrucutro para que el elemento se transforme en una propiedad, y si coincido en el form original se actualiza dicha propiedad
    })
  }

  const handleChecked =(e)=>{
    setForm({
      ...form, //lo que ya tiene el formulario
      [e.target.name]: e.target.checked  //desestrucutro para que el elemento se transforme en una propiedad, y si coincido en el form original se actualiza dicha propiedad
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("El formulario se ha enviado")
  }

  return (
    <>
      <div className="formulario">
        
          <h2>Formulario</h2>
        
          <form onSubmit={handleSubmit}>

            <div className="nombre">
              <label htmlFor="nombre" className="lbl-nombre">
                <span className="text-nombre">Nombre: </span>
              </label>
              <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required/>
            </div>

            <div className="framework">
              <p className="text-framework">Framework/Librería favorita:</p>

              <input type="radio" id="Vanilla" name="sabor" value="Vanilla" onChange={handleChange} required/>
              <label htmlFor="Vanilla">Vanilla</label>

              <input type="radio" id="React" name="sabor" value="React" onChange={handleChange}/>
              <label htmlFor="React">React</label>

              <input type="radio" id="Vue" name="sabor" value="Vue" onChange={handleChange}/>
              <label htmlFor="Vue">Vue</label>

              <input type="radio" id="jQuery" name="sabor" value="jQuery" onChange={handleChange}/>
              <label htmlFor="jQuery">jQuery</label>
            </div>

            <div className="lenguaje">
              <p>Selecciona tu lenguaje favorito:</p>
              <select name="lenguaje" onChange={handleChange} required>
                <option value="">---</option>
                <option value="py">python</option>
                <option value="js">javascript</option>
                <option value="php">php</option>
              </select>
            </div>

            <div className="terminos">
              <label htmlFor="terminos">Acepto compartir estos datos  </label>
              <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} required/>
            </div>

          <div className="boton-enviar">
            <button type="submit">ENVIAR</button>
          </div>

          </form>
      </div>
    </>
  )

}