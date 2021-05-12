import './styles/Tasks.css';

export default function Tasks(props){

    return (
        <ul>
            {props.data.slice().sort((x, y) => {
                console.log(x.done-y.done);
                return (x.done && y.done ? y.done_at - x.done_at : x.done - y.done);
            }).map(item => {
                return(
                    <li key={item.key} className={item.done ? "done" : undefined}>
                        <input 
                            type="checkbox"
                            checked={item.done}
                            onChange={(e) => {props.onCheckbox(e.target.checked, item.key)}}
                        />
                        <form 
                            onChange={(e) => props.onRename(item.key, e.target.value)}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input 
                                type="text"
                                value={item.title}
                            />
                        </form>
                        <button 
                            className="deleteButton"
                            onClick={() => {props.onDelete(item.key)}}>
                            <span  role="img" aria-label="cross mark">❌</span>
                        </button>
                    </li>
                )
            })}
        </ul>
    );
}