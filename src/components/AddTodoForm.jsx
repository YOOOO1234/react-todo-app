export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Todoリスト</h2>
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
