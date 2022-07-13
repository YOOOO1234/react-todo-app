import { Heading,Input,FormControl,FormLabel,FormErrorMessage,FormHelperText, } from '@chakra-ui/react'
export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <FormControl onSubmit={onAddFormSubmit}>
      <Heading>Todoリスト</Heading>
      <FormLabel htmlFor="todo">新しくやることを追加: </FormLabel>
      <Input
        name="todo"
        type="text"
        placeholder="新しくやること"
        value={todo}
        onChange={onAddInputChange}
      />
    </FormControl>
  );
}
