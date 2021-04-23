import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function PacientList() {
  const [pacients, setPacients] = useState([]);

  useEffect(() => {
    api.get("pacientes").then((response) => {
      setPacients(response.data);
    });
  }, []);

  return (
    <div className="pacient-container">
      <h2>Listagem dos pacientes</h2>
      <div className="pacient-content">
        <div className="pacient-list">
          {pacients.map((pacient) => (
            <div className="pacient-item">
              <Link
                className="link-text"
                to={{
                  pathname: `pacientdetails/${pacient.id}`,
                  state: pacient,
                }}
              >
                <span >{pacient.nome}</span>
              </Link>
              <Link
                className="link-text"
                to={{
                  pathname: `pacientedit/${pacient.id}`,
                  state: pacient,
                }}
              >
                <Button type="primary">Editar</Button>
              </Link>
            </div>
          ))}
        </div>
        <div >
          <Link to="/newpacient" className="link-text">
            <Button type="primary">Novo paciente</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
