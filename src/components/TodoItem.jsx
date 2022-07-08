export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onEditClick(todo)}>編集</button>
      <button onClick={() => onDeleteClick(todo.id)}>削除</button>
    </li>
  );
}
