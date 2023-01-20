import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  title: string;
  id: number;
  done: boolean;
  onCheck: (key: number) => void
  onDelete: (key: number) => void
}

export function Task({ title, done, id, onCheck, onDelete }: TaskProps) {
  function handleCheck() {
    onCheck(id)
  }

  function handleDelete() {
    onDelete(id)
  }

  return(
    <div className={styles.task}>
      <div className={styles.taskToggleForm}>
        <label>
          <input type='checkbox' checked={done} key={id} onChange={handleCheck}/>
          <span />
        </label>
        <span className={done ? styles.doneToDoText : styles.pendingToDoText}>
          {title}
        </span>
      </div>
      <button title='Deletar To-Do' onClick={handleDelete}>
        <Trash size={24}/>
      </button>
    </div>
  )
}

