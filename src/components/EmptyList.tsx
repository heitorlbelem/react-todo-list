import styles from './EmptyList.module.css'
import emptyLogo from '../assets/empty-logo.svg'

export function EmptyList() {
  return(
    <div className={styles.emptyList}>
      <img src={emptyLogo} alt="Logo de lista vazia" />
      <div className={styles.content}>
        <p><b>Você ainda não tem tarefas cadastradas</b></p>
        Crie tarefas e organize seus itens a fazer
      </div>
    </div>
  )
}