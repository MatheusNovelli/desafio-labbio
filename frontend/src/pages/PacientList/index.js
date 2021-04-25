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

  function organizeAlphabetically(a, b) {
    return a.nome.localeCompare(b.nome)
  }

  return (
    <div className="pacient-container">
      <h2>Listagem dos pacientes</h2>
      <div className="pacient-content">
        <div className="pacient-list">
          {pacients.sort(organizeAlphabetically).map((pacient) => (
            <div className="pacient-item">
              <div className="pacient-name">
                <Link
                  className="link-text"
                  to={{
                    pathname: `pacientdetails/${pacient.id}`,
                    state: pacient,
                  }}
                >
                  <span>{pacient.nome}</span>
                </Link>
              </div>
              <div className="buttons-list">
                <Link
                  className="link-text"
                  to={{
                    pathname: `pacientedit/${pacient.id}`,
                    state: pacient,
                  }}
                >
                  <Button ghost="true" type="primary">
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="list-button">
          <Link to="/newpacient" className="link-text">
            <Button type="primary">Novo paciente</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
