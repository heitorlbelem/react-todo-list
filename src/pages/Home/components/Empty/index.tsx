import clipboard from "../../../../assets/clipboard.svg";
import { Container } from "./styles";

export function Empty() {
  return (
    <Container>
      <img src={clipboard} alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </Container>
  );
}
