import { Header } from "./components/Header";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./components/Task";
import { PlusCircle, ClipboardText } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";

import "./global.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      isTaskCompleted: false,
      content: "Terminar o projeto",
    },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      { isTaskCompleted: false, content: newTaskText, id: uuidv4() },
    ]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório");
  }

  function toggleCompleteTask(id: string) {
    const completedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isTaskCompleted: !task.isTaskCompleted,
        };
      }

      return task;
    });

    setTasks(completedTaskList);
  }

  function deleteTask(id: string) {
    const taskListWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(taskListWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;
  const completedTasks = tasks.filter((task) => {
    return task.isTaskCompleted;
  }).length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>

        <main>
          <div className={styles.tasksContainer}>
            <header>
              <div>
                <p className={styles.createdTasks}>Tarefas criadas</p>
                <span>{tasks.length}</span>
              </div>

              <div>
                <p className={styles.concludedTasks}>Concluídas</p>

                {tasks.length !== 0 ? (
                  <span>
                    {completedTasks} de {tasks.length}
                  </span>
                ) : (
                  <span>0</span>
                )}
              </div>
            </header>

            {tasks.length !== 0 ? (
              <div>
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      isTaskCompleted={task.isTaskCompleted}
                      content={task.content}
                      id={task.id}
                      onCompleteTask={() => toggleCompleteTask(task.id)}
                      onDeleteTask={() => deleteTask(task.id)}
                    />
                  );
                })}
              </div>
            ) : (
              <div className={styles.taskList}>
                <div>
                  <ClipboardText size={56} />
                  <span>Você ainda não tem tarefas cadastradas</span>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
