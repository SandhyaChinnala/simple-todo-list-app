// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
