import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import api from "../../services/api";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function PacientCreate() {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  const data = {
    id,
    nome,
    cpf,
    sexo,
    idade,
    peso,
    telefone,
    email,
    endereco,
  };

  

  async function createPacient(e) {
    e.preventDefault();

    try {
      console.log("data",data);
      await api.post("pacientes", data);
    } catch (error) {
      console.error("Erro ao criar paciente");
    }
  }
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="ID"
        name="id"
        value={id}
        rules={[
          {
            required: true,
            message: "Insira o ID do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setId(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Nome"
        name="nome"
        value={nome}
        rules={[
          {
            required: true,
            message: "Insira o nome do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setNome(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="CPF"
        name="cpf"
        value={cpf}
        rules={[
          {
            required: true,
            message: "Insira o CPF do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setCpf(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Sexo"
        name="sexo"
        value={sexo}
        rules={[
          {
            required: true,
            message: "Insira o sexo do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setSexo(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Idade"
        name="idade"
        value={idade}
        rules={[
          {
            required: true,
            message: "Insira a idade do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setIdade(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Peso"
        name="peso"
        value={peso}
        rules={[
          {
            required: true,
            message: "Insira o peso do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setPeso(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Telefone"
        name="telefone"
        value={telefone}
        rules={[
          {
            required: true,
            message: "Insira o telefone do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setTelefone(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        value={email}
        rules={[
          {
            required: true,
            message: "Insira o e-mail do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Endereço"
        name="endereco"
        value={endereco}
        rules={[
          {
            required: true,
            message: "Insira o endereço do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setEndereco(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={createPacient}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
