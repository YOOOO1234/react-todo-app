import { Heading, Button } from '@chakra-ui/react'
export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <Heading>やることを編集</Heading>
      <label htmlFor="updateTodo">やることを更新: </label>
      <input
        name="updateTodo"
        type="text"
        placeholder="Update todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <Button type="submit" onClick={onEditFormSubmit}>
        更新
      </Button>
      <Button onClick={() => setIsEditing(false)}>キャンセル</Button>
    </form>
  );
}
