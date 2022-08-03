import { useEffect, useState } from "react";
import { AddTodoForm, TodoItem, EditForm } from "./components";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [periods,setPeriods] = useState(() => {
    const savedPeriods = localStorage.getItem("periods");
    if (savedPeriods) {
      return JSON.parse(savedPeriods);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [period,setPeriod] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentPeriod, setCurrentPeriod] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("periods", JSON.stringify(periods));
  }, [todos, periods]);
    
  function handleAddInputChange(e) {
    setTodo(e.target.todo);
    setPeriod(e.target.period);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.todo });
    setCurrentPeriod({...currentPeriod, text: e.target.period})
    console.log(currentTodo);
    console.log(currentPeriod);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }else if(period !== "") {
      setPeriods([
        ...periods,
        {
          id: new Date(),
          text: period.trim()
        }
      ]);
    }

    setTodo("");
    setPeriod("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
    handleUpdatePeriod(currentPeriod.id, currentPeriod);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleUpdatePeriod(id, updatedPeriod) { 
    const updatedItem = todos.map((period) => {
      return period.id === id ? updatedPeriod :period;
    });
    setIsEditing(false);
    setPeriods(updatedItem);
  }

  function handleEditClick(todo, period) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
    setCurrentPeriod({ ...period })
  }

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          currentPeriod={currentPeriod}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          period={period}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
