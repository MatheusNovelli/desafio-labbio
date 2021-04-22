import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";

export default function PacientList() {
  const [pacients, setPacients] = useState([]);

  useEffect(() => {
    api.get("pacientes").then((response) => {
      setPacients(response.data);
    });
  }, []);

  return (
    <div className="pacient-container">
      <h3>Listagem dos pacientes</h3>
      <div className="pacient-content">
        <div className="pacient-list">
          {pacients.map((pacient, index) => (
            <div className="pacient-item">
              <Link to={{
                pathname: `pacientdetails/${pacient.id}`,
                state: pacient
              }}>
              <span key= {index}>{pacient.nome}</span>
              </Link>
              <Link to={{
                pathname: `pacientedit/${pacient.id}`,
                state: pacient
              }
              }>
              <button onClick={console.log("id",pacient.id)}>Editar</button>
              </Link>
              
            </div>
          ))}
        </div>
        <div className="create-button">
          <Link to="/newpacient"><div>Novo paciente</div></Link>
        </div>
      </div>
    </div>
  );
}
