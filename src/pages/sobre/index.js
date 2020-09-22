import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Table } from "./styles";

function Sobre() {
  const [dados, setDados] = useState([]);
  const [count, setCount] = useState(0);

  // nesta sintaxe, é rodado quando o componente e inicializado
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    api.get("/clients").then((response) => {
      setDados(response.data);
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>nome</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              <td>{dado.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
        }}
      >
        contar
      </button>
      <p>{count}</p>
    </>
  );
}

export default Sobre;
