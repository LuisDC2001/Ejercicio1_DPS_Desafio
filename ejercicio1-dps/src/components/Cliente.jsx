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
      </form>
    </div>
  );
}

export default Formulario;