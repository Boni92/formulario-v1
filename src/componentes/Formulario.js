import React, { useState } from "react";

export default function Formulario() {

  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("El formulario se ha enviado")
  }
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} required/>
        </div>

        <div >
          <p>Elige tu sabor JS favorito:</p>
          <input type="radio" id="Vanilla" name="sabor" value="Vanilla" onChange={(e)=>setSabor(e.target.value)} required/>
          <label htmlFor="Vanilla">Vanilla</label>
          <input type="radio" id="React" name="sabor" value="React" onChange={(e)=>setSabor(e.target.value)}/>
          <label htmlFor="React">React</label>
          <input type="radio" id="Vue" name="sabor" value="Vue" onChange={(e)=>setSabor(e.target.value)}/>
          <label htmlFor="Vue">Vue</label>
          <input type="radio" id="Svelte" name="sabor" value="Svelte" onChange={(e)=>setSabor(e.target.value)}/>
          <label htmlFor="Svelte">Svelte</label>
        </div>

        <div>
          <p>Selecciona tu lenguaje favorito:</p>
          <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} required>
            <option value="">---</option>
            <option value="py">python</option>
            <option value="js">javascript</option>
            <option value="php">php</option>
          </select>
        </div>
      <br/>
      <br/>
      <div>
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={(e)=>setTerminos(e.target.checked)} required/>
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>

      </form>

    </>
  )

}