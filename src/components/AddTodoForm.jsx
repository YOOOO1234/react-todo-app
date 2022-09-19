import {Heading,Input,Button,FormLabel } from '@chakra-ui/react'
export default function AddTodoForm({
  todo,
  period,
  onAddFormSubmit,
  onAddInputChange,
  onAddPeriodInputChange
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
          value={todo.text}
          onChange={(e)=>onAddInputChange(e, "todo")}
        />
      </FormLabel>
      <FormLabel textAlign={'center'} maxW="960px" mx="auto" htmlFor="period">期限を入力: 
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          value={todo.period}
          onChange={(e)=>onAddPeriodInputChange(e, "period")}
        />
        <Button ml={2} colorScheme="green" onClick={onAddFormSubmit}>追加</Button>
      </FormLabel>
    </form>
  );
}
