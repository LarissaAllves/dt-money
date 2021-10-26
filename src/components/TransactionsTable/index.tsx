import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td className="deposit">Desenvolvimento de WebSite</td>
            <td>R$: 12.000,00</td>
            <td>Venda</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td className="withdraw"> ALuguel</td>
            <td> -R$: 800,00</td>
            <td>Despesa</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
