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
              <span key= {index}>{pacient.nome}</span>
              <button>Editar</button>
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
