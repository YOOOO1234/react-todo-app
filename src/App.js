import { useEffect, useState } from "react";
import { AddTodoForm, TodoItem, EditForm} from "./components";
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
    console.log('e',e);
    console.log(e.target.value);
    setTodo( { ...todo, text: e.target.value});
  }
  function handlePeriodInputChange(e) {
    console.log('e',e);
    setTodo( { ...todo, period: e.target.value });
  }
  function handleEditInputChange(e,text) {
    setCurrentTodo({ ...currentTodo, [text]: e.target.value });
    setCurrentPeriod({ ...currentPeriod, [text]: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.text.trim(),
          period: todo.period
        }
      ]);
    }else if(period !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.text.trim(),
          period: todo.period
        }
      ]);
    }

    setTodo("");
    setPeriod("");
  }
  console.log(todos)
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
    const updatedItem = periods.map((period) => {
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
    <div>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          currentPeriod={currentPeriod}
          setIsEditing={setIsEditing}
          onEditTodoInputChange={handleEditInputChange}
          onEditPeriodInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddPeriodInputChange={handlePeriodInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo,period) => (
          <TodoItem
            todo={todo}
            // key={todo}
            period={period}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
