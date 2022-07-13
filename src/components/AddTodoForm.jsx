import { Heading, Button } from '@chakra-ui/react'
export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <Heading>Todoリスト</Heading>
      <label htmlFor="todo">新しくやることを追加: </label>
      <input
        name="todo"
        type="text"
        placeholder="新しくやること"
        value={todo}
        onChange={onAddInputChange}
      />
    </form>
  );
}
