import { Box, Button, SimpleGrid } from '@chakra-ui/react'
export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
    <Box bg="yellow.100">
      <li key={todo.id}>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            {todo.text} 
            {todo?.period} 
          </Box>
          <Box>
            <Button ml={2} color='#4299E1' onClick={() => onEditClick(todo)}>編集</Button>
            <Button ml={2} color='#48BB78' onClick={() => onDeleteClick(todo.id)}>完了</Button>
          </Box>
        </SimpleGrid>
      </li>
    </Box>
  );      
   

}
