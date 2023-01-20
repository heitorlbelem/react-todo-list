import { Header } from './components/Header'
import { Task } from './components/Task'
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react'
import { Badge } from './components/Badge'
import { EmptyList } from './components/EmptyList'

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [tasksCount, setTasksCount] = useState(0)

  const createdTasksCount = tasks.length
  const finishedTasksCount = tasks.filter(task => task.done === true).length

  function toggleTask(id: number) {
    let newTasksArray = tasks.map(task => {
      if(task.id === id) {
        let current = !task.done
        return { ...task, done: current }
      } else {
        return task
      }
    })

    setTasks(newTasksArray)
  }

  function deleteTask(id: number) {
    let newTasksArray = tasks.filter(task => task.id !== id)

    setTasks(newTasksArray)
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask: Task = {
      title: newTaskTitle,
      done: false,
      id: tasksCount
    }

    setTasks(state => [...state, newTask])
    setNewTaskTitle('')
    setTasksCount(state => state + 1)
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskTitle(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function renderList() {
    if(tasks.length === 0) {
      return <EmptyList />
    }
    
    
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles.content}>
          <form className={styles.newTaskForm} onSubmit={handleNewTask}>
            <input
              type='text'
              placeholder='Adicione uma nova tarefa'
              value={newTaskTitle}
              onChange={handleNewTaskTextChange}
              onInvalid={handleNewTaskInvalid}
              required
            >
            </input>
            <button type='submit'>
              Criar
              <PlusCircle size={16} weight='bold'/>
            </button>
          </form>

          <div className={styles.tasksBox}>
            <header>
              <div className={styles.createdTasksBadge}>
                Tarefas criadas
                <Badge content={createdTasksCount.toString()}/>
              </div>
              <div className={styles.finishedTasksBadge}>
                Concluídas
                <Badge content={`${finishedTasksCount} de ${createdTasksCount}`}/>
              </div>
            </header>

            <div className={styles.todoList}>
              { 
                tasks.length === 0
                ? <EmptyList />
                : tasks.map(task => {
                  return(
                    <Task
                      onCheck={toggleTask}
                      onDelete={deleteTask}
                      title={task.title}
                      id={task.id}
                      done={task.done}
                      key={task.id}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
