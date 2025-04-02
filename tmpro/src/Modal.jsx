export default function Modal(props) {
  return (
    <div className="modal-container">
      <form action="" className="form">
        <label>
          Enter Title:
          <input type="text" name="title"/>
        </label>
        <label>
          Enter Description:
          <input type="text" name="description" />
        </label>
        <label>
          Enter Due Date:
          <input type="date" name="dueDate"/>
        </label>
        <label>
          Enter Priority:
          <select name="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <label>
          Enter Category:
          <select name="category">
            <option value="work">work</option>
            <option value="personal">personal</option>
            <option value="casual">casual</option>
          </select>
        </label>

        <button onClick={props.add}>Submit</button>
        <button onClick={props.change}>Close</button>
      </form>
    </div>
  );
}
