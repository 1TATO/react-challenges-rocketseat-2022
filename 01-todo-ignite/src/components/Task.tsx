import { Circle, CheckCircle, Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  isTaskCompleted: boolean;
  content: string;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  id,
  isTaskCompleted = false,
  content,
  onCompleteTask,
  onDeleteTask,
}: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <button onClick={handleCompleteTask}>
        {isTaskCompleted ? (
          <CheckCircle size={24} weight="fill" color="#5E60CE" />
        ) : (
          <Circle size={24} />
        )}
      </button>

      {isTaskCompleted ? (
        <p>
          <s>{content}</s>
        </p>
      ) : (
        <p>{content}</p>
      )}

      <button onClick={handleDeleteTask} title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  );
}
