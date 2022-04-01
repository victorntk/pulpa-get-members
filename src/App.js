import React, { useState, useEffect } from "react";
import { Table, Badge, ProgressBar } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import axios from "axios";
import './App.css';

const App = () => {
  const [members, setMembers] = useState([]);
  const queryParams = new URLSearchParams(window.location.search)
  const cupom = queryParams.get("cupom")

  useEffect(() => {
    const fetchMembers = async () => {
      await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      ).then((result) => {
        setMembers(result.data);
      });
    };

    fetchMembers();
  }, []);

  return (
    <div className="App">
      <Table border hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cadstro?</th>
            <th>Pulpilo?</th> 
            <th>Aporte?</th>
            <th>Pagamento?</th>
            <th>Progresso</th>
          </tr>
        </thead>
        <tbody className="Tbody">
          {members.map((member) => (
            <tr>
              <td className="nome">{member.title}</td>
              <td className="check"> <FaCheckCircle /> </td>
              <td className="success"> <Badge bg="success">Success</Badge>  </td>
              <td className="column"> ----- </td>
              <td className="column"> ----- </td>
              <td className="column"> ----- </td>
              <td className="ProgressBar"> <ProgressBar now={60} /> </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
