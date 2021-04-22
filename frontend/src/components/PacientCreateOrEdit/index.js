import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { FiCheckCircle } from "react-icons/fi";
import api from "../../services/api";
import 'antd/dist/antd.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function PacientCreateOrEdit({ request, url, notification, isRequired }) {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    api.get("pacientes").then((response) => {
      setId(response.data);
      setNome(response.data);
      setCpf(response.data);
      setSexo(response.data);
      setIdade(response.data);
      setPeso(response.data);
      setTelefone(response.data);
      setEmail(response.data);
      setEndereco(response.data);
    });
  }, []);

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

  function handlePacient(e) {
    e.preventDefault();

    try {
      request(url, data);
      notification.open({
        message: notification,
        className: "ant-notification",
        top: "100px",
        icon: <FiCheckCircle style={{ color: "#2ECEF1" }} />,
        style: {
          width: 600,
        },
      });
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
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
            required: isRequired,
            message: "Insira o endereço do paciente!",
          },
        ]}
      >
        <Input onChange={(e) => setEndereco(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handlePacient}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
