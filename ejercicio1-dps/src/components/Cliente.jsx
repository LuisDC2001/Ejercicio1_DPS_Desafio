import React,{useState} from "react";
import '../FormularioCursos.css';

const Formulario=()=>{
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('ingles');
  const [cantidadMeses, setCantidadMeses] = useState(1);
 

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCursoChange = (event) => {
    setCurso(event.target.value);
  };

  const handleCantidadMesesChange = (event) => {
    setCantidadMeses(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Curso:', curso);
    console.log('Cantidad de Meses:', cantidadMeses);
  };

  const precioPorMes = 25;
  let descuento = 0;
  let porcentajeDescuento = 0;

  if (cantidadMeses >= 2 && cantidadMeses <= 3) {
    descuento = precioPorMes * cantidadMeses * 0.1;
    porcentajeDescuento = 10;
  } else if (cantidadMeses >= 4 && cantidadMeses <= 5) {
    descuento = precioPorMes * cantidadMeses * 0.2;
    porcentajeDescuento = 20;
  } else if (cantidadMeses >= 6 && cantidadMeses <= 7) {
    descuento = precioPorMes * cantidadMeses * 0.27;
    porcentajeDescuento = 27;
  } else if (cantidadMeses >= 8 && cantidadMeses <= 9) {
    descuento = precioPorMes * cantidadMeses * 0.37;
    porcentajeDescuento = 37;
  } else if (cantidadMeses >= 10) {
    descuento = precioPorMes * cantidadMeses * 0.53;
    porcentajeDescuento = 53;
  }

  const totalAPagar = precioPorMes * cantidadMeses - descuento;
  


  return (
    <div className="formulario-container">
      <h2>Formulario de Inscripción a Cursos de Inglés y Frances</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={handleApellidoChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="curso">Curso:</label>
          <select id="curso" value={curso} onChange={handleCursoChange}>
            <option value="ingles">Inglés</option>
            <option value="frances">Francés</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cantidadMeses">Cantidad de Meses a Pagar:</label>
          <input
            type="number"
            id="cantidadMeses"
            value={cantidadMeses}
            onChange={handleCantidadMesesChange}
            min="1"
            required
          />
        </div>
        <button type="submit">Enviar</button>

        <div>
      <h2>Resumen de la Inscripción</h2>
      <p>Nombre del Cliente: {nombre}</p>
      <p>Apellido del Cliente: {apellido}</p>
      <p>Tipo de Curso: {curso}</p>
      <p>Cantidad de Meses a Pagar: {cantidadMeses}</p>
      <p>Descuento Calculado: ${descuento.toFixed(2)}</p>
      <p>Porcentaje de Descuento: {porcentajeDescuento}%</p>
      <p>Total a Pagar: ${totalAPagar.toFixed(2)}</p>
    </div>

      </form>
    </div>
  );
}

export default Formulario;