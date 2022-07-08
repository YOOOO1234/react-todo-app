export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>やることを編集</h2>
      <label htmlFor="updateTodo">やることを更新: </label>
      <input
        name="updateTodo"
        type="text"
        placeholder="Update todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit" onClick={onEditFormSubmit}>
        更新
      </button>
      <button onClick={() => setIsEditing(false)}>キャンセル</button>
    </form>
  );
}
