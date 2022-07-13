import { Button, ButtonGroup } from '@chakra-ui/react'
export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
    <li key={todo.id}>
      {todo.text}
      <Button onClick={() => onEditClick(todo)}>編集</Button>
      <Button onClick={() => onDeleteClick(todo.id)}>削除</Button>
    </li>
  );
}
