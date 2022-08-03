import { Box, Button } from '@chakra-ui/react'
export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
    <Box bg="yellow.100">
      <li key={todo.id}>
        {todo.text}
        <Button ml={350} color='#4299E1' onClick={() => onEditClick(todo)}>編集</Button>
        <Button ml={2} color='#48BB78' onClick={() => onDeleteClick(todo.id)}>完了</Button>
      </li>
    </Box>
  );      
   

}
