import React, { useEffect, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { FiCheckCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function PacientCreateOrEdit({
  request,
  url,
  message,
  isRequired
}) {
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
      api.get(url).then((response) => {
        setId(response.data[0].id);
        setNome(response.data[0].nome);
        setCpf(response.data[0].cpf);
        setSexo(response.data[0].sexo);
        setIdade(response.data[0].idade);
        setPeso(response.data[0].peso);
        setTelefone(response.data[0].telefone);
        setEmail(response.data[0].email);
        setEndereco(response.data[0].endereco);
      });
  }, [url]);

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
        message: "Sucesso!",
        description: message,
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
    <div className="create-edit-container">
      <div className="arrow-back-container">
        <Link className="link-text" to="/">
          <FiArrowLeftCircle className="arrow-back" />
        </Link>
      </div>
      <h2>{isRequired ? "Criar Paciente" : "Editar Paciente"}</h2>
      <div className="create-edit-content">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          {isRequired ? (
            <Form.Item
              label="ID"
              name="id"
              rules={[
                {
                  required: isRequired,
                  message: "Insira o ID do paciente!",
                },
              ]}
            >
              <Input value={id} onChange={(e) => setId(e.target.value)} />
            </Form.Item>
          ) : null}

          <Form.Item
            label="Nome"
            name="nome"
            rules={[
              {
                required: isRequired,
                message: "Insira o nome do paciente!",
              },
            ]}
          >
            <Input value={nome} onChange={(e) => setNome(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="CPF"
            name="cpf"
            rules={[
              {
                required: isRequired,
                message: "Insira o CPF do paciente!",
              },
            ]}
          >
            <Input value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Sexo"
            name="sexo"
            rules={[
              {
                required: isRequired,
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
                required: isRequired,
                message: "Insira a idade do paciente!",
              },
            ]}
          >
            <Input value={idade} onChange={(e) => setIdade(e.target.value)} />
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
            rules={[
              {
                required: isRequired,
                message: "Insira o telefone do paciente!",
              },
            ]}
          >
            <Input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: isRequired,
                message: "Insira o e-mail do paciente!",
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Endere??o"
            name="endereco"
            rules={[
              {
                required: isRequired,
                message: "Insira o endere??o do paciente!",
              },
            ]}
          >
            <Input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Item>
          <Form.Item className="create-button-container">
            <Button
              className="create-button"
              type="primary"
              htmlType="submit"
              onClick={handlePacient}
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
