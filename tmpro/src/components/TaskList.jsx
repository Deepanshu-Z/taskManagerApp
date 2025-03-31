export default function Task(prop){
    return(
        <div className="task-container">
            <div className="task"> 
                <ul>
                    <li>Title = {prop.val}</li>
                    <li>Description = {prop.val}</li>
                    <li>Due Date = {prop.val}</li>
                    <li>Priority = {prop.val}</li>
                    <li>Status = {prop.val}</li>
                    <li>Category = {prop.val}</li>
                </ul> 
            </div>
        </div>
    )
}