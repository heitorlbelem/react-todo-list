import { PlusCircle } from "phosphor-react";
import logo from "../../assets/logo.svg";

import { Header, HomeContainer, Main } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <img src={logo} alt="Logo de foguete com o texto ToDo ao lado" />
      </Header>

      <Main>
        <form action="">
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="submit">
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>

        <section>
          <header>
            <p>
              Tarefas criadas
              <span>0</span>
            </p>
              
            <p>
              Concluídas
              <span>2 de 5</span>
            </p>
          </header>

          <ul>
            <li>
              <button></button>
            </li>
          </ul>
        </section>
      </Main>
    </HomeContainer>
  );
}