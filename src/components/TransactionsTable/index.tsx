import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

interface ITransaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <td className={transaction.type}>{transaction.title}</td>
              <td>R${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
