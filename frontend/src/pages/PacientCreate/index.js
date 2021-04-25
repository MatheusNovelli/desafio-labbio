import React from "react"
import api from "../../services/api";
import PacientCreateOrEdit from "../../components/PacientCreateOrEdit";

export default function PacientCreate() {
  return (
    <div>
      <PacientCreateOrEdit
        request={api.post}
        url={"pacientes"}
        message="Paciente criado"
        isRequired={true}
      />
    </div>
  );
}
