import { Check, Trash } from "phosphor-react";
import { FinishedButton, PendingButton, Task, TaskDescription } from "./styles";

interface TaskItemProps {
  id: string;
  finished: boolean;
  title: string;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}

export function TaskItem({
  id,
  finished,
  title,
  onDeleteTask,
  onToggleTask,
}: TaskItemProps) {
  function handleToggleFinishTask() {
    onToggleTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <Task key={id}>
      {finished ? (
        <FinishedButton onClick={handleToggleFinishTask}>
          <Check size={16} />
        </FinishedButton>
      ) : (
        <PendingButton onClick={handleToggleFinishTask} />
      )}
      <TaskDescription finished={finished}>{title}</TaskDescription>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </Task>
  );
}
