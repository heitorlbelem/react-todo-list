import { PlusCircle, Trash } from "phosphor-react";
import logo from "../../assets/logo.svg";

import { Header, HomeContainer, Main, Task, Tasks, TasksListCounter, TodoHeader } from "./styles";

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
          <TodoHeader>
            <TasksListCounter titleColor="blue">
              Tarefas criadas
              <span>0</span>
            </TasksListCounter>

            <TasksListCounter titleColor="purple">
              Concluídas
              <span>2 de 5</span>
            </TasksListCounter>
          </TodoHeader>

          <Tasks>
            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>

            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>
            
            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>
            
            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>

            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>

            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>

            <Task>
              <button name="select" id="select" />
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20}/>
              </button>
            </Task>
          </Tasks>
        </section>
      </Main>
    </HomeContainer>
  );
}