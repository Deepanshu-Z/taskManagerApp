export default function Button(props){
    return (
        <div className ="generate-button">
            <button onClick={props.func}>{props.name}</button>
        </div>
    )
}