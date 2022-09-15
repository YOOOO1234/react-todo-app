import { Heading, Button } from '@chakra-ui/react'
export default function EditForm({
  currentTodo,
  currentPeriod,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <Heading as='h4' size='md'>やることを編集</Heading>
      <label htmlFor="updateTodo">やることを更新: </label>
      <input
        name="updateTodo"
        type="text"
        placeholder="やること"
        value={currentTodo.text}
        onChange={(e)=>onEditInputChange(e, "text")}
      />
      <Heading as='h4' size='md'>期限を編集</Heading>
      <label htmlFor="updatePeriod">期限を更新: </label>
      <input
        name="updatePeriod"
        type="text"
        placeholder="YYYY/MM/DD"
        value={currentPeriod.text}
        onChange={(e)=>onEditInputChange(e, "period")}
      />
      <Button colorScheme='green'type="submit" onClick={onEditFormSubmit}>
        更新
      </Button>
      <Button colorScheme='red' onClick={() => setIsEditing(false)}>キャンセル</Button>
    </form>
  );
}
