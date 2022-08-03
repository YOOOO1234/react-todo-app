import {Heading,Input,Button,FormLabel } from '@chakra-ui/react'
export default function AddTodoForm({
  todo,
  period,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <Heading padding={10}>Todoリスト</Heading>
      <FormLabel textAlign={'center'} maxW="960px" mx="auto" htmlFor="todo">新しくやることを追加:
        <Input
          name="todo"
          type="text"
          ml={2}
          mx="auto"
          maxW="450px" 
          placeholder="新しくやること"
          value={todo}
          onChange={onAddInputChange}
        />
      </FormLabel>
      <FormLabel textAlign={'center'} maxW="960px" mx="auto" htmlFor="period">期限を入力: 
        <Input
          name="period"
          type="text"
          ml={2}
          mx="auto"
          maxW="450px" 
          placeholder="YYYY/MM/DD"
          value={period}
          onChange={onAddInputChange}
        />
        <Button ml={2} colorScheme="green" onClick={onAddFormSubmit}>追加</Button>
      </FormLabel>
    </form>
  );
}
