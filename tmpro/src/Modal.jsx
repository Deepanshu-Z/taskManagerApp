export default function Modal(props) {
  return (
    <div className="modal-container">
      <form action="" className="form">
        <label>
          Enter Title:
          <input type="text" />
        </label>
        <label>
          Enter Description:
          <input type="text" />
        </label>
        <label>
          Enter Due Date:
          <input type="date" />
        </label>
        <label>
          Enter Priority:
          <select>
            <option value="apple">High</option>
            <option value="banana">Medium</option>
            <option value="orange">Low</option>
          </select>
        </label>
        <label>
          Enter Category:
          <select>
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
