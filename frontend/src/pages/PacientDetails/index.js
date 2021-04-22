import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function PacientDetails(props) {
  function pacientInfo({ info }) {
    return (
      <div>
        <strong>
          {info}
          <p>Teste</p>
        </strong>
      </div>
    );
  }
    
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    api.get(`paciente/${props.match.params.id}`).then((response) => {
      setPacient(response.data);
    });
  });

  return (
    <div>
      <h3>Detalhes do paciente</h3>
      <div>
        {pacient && (<pacientInfo info={"Nome"} />)}
        {pacient && <pacientInfo info="Nome" />}
        {pacient && <pacientInfo info="Nome" />}
      </div>
    </div>
  );
}
