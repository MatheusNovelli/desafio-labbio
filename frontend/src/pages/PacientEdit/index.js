import React from "react";
import PacientCreateOrEdit from "../../components/PacientCreateOrEdit";
import api from "../../services/api";

export default function PacientEdit(props) {

//   function updatePacient(e) {
//     e.preventDefault();
//     api.put(`/pacientes/${props.match.params.id}`, data);
//   }

  return (
    <div>
      <PacientCreateOrEdit request={api.put} url={`/pacientes/${props.match.params.id}`} notification="Paciente atualizado."/>
    </div>
  );
}
