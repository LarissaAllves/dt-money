import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong> R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> -R$ 1.250,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> R$ 16.141,00</strong>
      </div>
    </Container>
  );
}
