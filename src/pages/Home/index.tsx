import { Check, PlusCircle, Trash } from "phosphor-react";
import logo from "../../assets/logo.svg";

import { ChangeEvent, FormEvent, useState } from "react";
import { FinishedButton, Header, HomeContainer, Main, PendingButton, Task, TaskDescription, Tasks, TasksListCounter, TodoHeader } from "./styles";

interface Task {
  id: string
  title: string
  finished: boolean
}

export function Home() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const isNewTaskTextFilled = !!newTaskText;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const id = new Date().getTime().toString();
    const newTask: Task = {
      id,
      title: newTaskText,
      finished: false
    };

    setTasks(state => [...state, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleToggleFinishTask(id: string){
    setTasks(state => state.map(task => {
      if(task.id !== id) return task;

      return {...task, finished: !task.finished};
    }));
  }

  function handleDeleteTask(id: string){
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <HomeContainer>
      <Header>
        <img src={logo} alt="Logo de foguete com o texto ToDo ao lado" />
      </Header>

      <Main>
        <form action="" onSubmit={handleCreateNewTask}>
          <input
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskTextChange}
            required
          />

          <button type="submit" disabled={!isNewTaskTextFilled}>
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
            {tasks.map(task => {
              return(
                <Task key={task.id}>
                  {
                    task.finished ?
                    (
                      <FinishedButton onClick={() => handleToggleFinishTask(task.id)}>
                        <Check size={16}/>
                      </FinishedButton>
                    ) :
                    <PendingButton onClick={() => handleToggleFinishTask(task.id)} />
                  }
                  <TaskDescription finished={task.finished}>
                    {task.title}
                  </TaskDescription>
                  <button type="button" onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={20}/>
                  </button>
                </Task>
              );
            })}
          </Tasks>
        </section>
      </Main>
    </HomeContainer>
  );
}