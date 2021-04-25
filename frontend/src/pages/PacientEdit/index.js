import React from "react";
import PacientCreateOrEdit from "../../components/PacientCreateOrEdit";
import api from "../../services/api";

export default function PacientEdit(props) {
  return (
    <div>
      <PacientCreateOrEdit
        request={api.put}
        url={`/pacientes/${props.match.params.id}`}
        message="Paciente atualizado."
        isRequired={false}
      />
    </div>
  );
}
