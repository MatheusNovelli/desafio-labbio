import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { FiCheckCircle } from "react-icons/fi";
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

  function createPacient(e) {
    e.preventDefault();

    try {
      api.post("pacientes", data);
      notification.open({
        message: "Sucesso!",
        description: "Paciente criado.",
        className: "ant-notification",
        top: "100px",
        icon: <FiCheckCircle style={{ color: "#2ECEF1" }} />,
        style: {
          width: 600,
        },
      });

      setId("");
      setNome("");
      setCpf("");
      setSexo("");
      setIdade("");
      setPeso("");
      setTelefone("");
      setEmail("");
      setEndereco("");
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
        rules={[
          {
            required: true,
            message: "Insira o ID do paciente!",
          },
        ]}
      >
        <Input value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Nome"
        name="nome"
        rules={[
          {
            required: true,
            message: "Insira o nome do paciente!",
          },
        ]}
      >
        <Input value={nome} onChange={(e) => setNome(e.target.value)} />
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
        rules={[
          {
            required: true,
            message: "Insira o sexo do paciente!",
          },
        ]}
      >
        <Input value={sexo} onChange={(e) => setSexo(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Idade"
        name="idade"
        rules={[
          {
            required: true,
            message: "Insira a idade do paciente!",
          },
        ]}
      >
        <Input value={idade} onChange={(e) => setIdade(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Peso"
        name="peso"
        rules={[
          {
            required: true,
            message: "Insira o peso do paciente!",
          },
        ]}
      >
        <Input value={peso} onChange={(e) => setPeso(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Telefone"
        name="telefone"
        rules={[
          {
            required: true,
            message: "Insira o telefone do paciente!",
          },
        ]}
      >
        <Input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Insira o e-mail do paciente!",
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Endereço"
        name="endereco"
        rules={[
          {
            required: true,
            message: "Insira o endereço do paciente!",
          },
        ]}
      >
        <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={createPacient}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
