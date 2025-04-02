export default function Task(prop) {
    return (
        <div className="task-container">
            <div className="task"> 
                <ul>
                    <li>Title: {prop.val.title}</li>
                    <li>Description: {prop.val.description}</li>
                    <li>Due Date: {prop.val.dueDate}</li>
                    <li>Priority: {prop.val.priority}</li>
                    <li>Category: {prop.val.category}</li>
                </ul> 
            </div>
        </div>
    );
}
