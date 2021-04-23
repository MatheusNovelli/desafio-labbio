import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function PacientDetails(props) {
  function PacientInfo({ info, infoRes }) {
      return (
        <div>
          <strong>
            {info}
            <p>{infoRes}</p>
            {console.log("teste",infoRes)}
          </strong>
        </div>
      );
  }

  const [pacient, setPacient] = useState();

  useEffect(() => {
    api.get(`pacientes/${props.match.params.id}`).then((response) => {
      setPacient(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Detalhes do paciente</h3>
      <div>
        {pacient && <PacientInfo info={"ID"} infoRes={pacient[0].id} />}
        {pacient && <PacientInfo info={"Nome"} infoRes={pacient[0].nome} />}
        {pacient && <PacientInfo info={"CPF"} infoRes={pacient[0].cpf} />}
        {pacient && <PacientInfo info={"Sexo"} infoRes={pacient[0].sexo} />}
        {pacient && <PacientInfo info={"Idade"} infoRes={pacient[0].idade} />}
        {pacient && <PacientInfo info={"Peso"} infoRes={pacient[0].peso} />}
        {pacient && <PacientInfo info={"Telefone"} infoRes={pacient[0].telefone} />}
        {pacient && <PacientInfo info={"E-mail"} infoRes={pacient[0].email} />}
        {pacient && <PacientInfo info={"Endereço"} infoRes={pacient[0].endereco} />}
      </div>
    </div>
  );
}
