import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function PacientDetails(props) {
  function PacientInfo({ info, infoRes }) {
    return (
      <div>
        <strong>
          {info}
          <p>{infoRes}</p>
        </strong>
      </div>
    );
  }
    
  const [pacient, setPacient] = useState();

  useEffect(() => {
    api.get(`paciente/${props.match.params.id}`).then((response) => {
        setPacient(response.data);
        console.log("paciente",pacient)
    });
  });

  return (
    <div>
      <h3>Detalhes do paciente</h3>
      <div>
        {pacient && (<PacientInfo info={"Nome"} infoRes={pacient.nome} />)}
      </div>
    </div>
  );
}
