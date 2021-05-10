import './styles/Tasks.css';

export default function Tasks(props){

    return (
        <ul>
            {props.data.sort((x, y) => {
                return (x.done === y.done)? 0 : x.done ? 1 : -1;
            }).map(item => {
                return(
                    <li key={item.key} className={item.done ? "done" : undefined}>
                        <input 
                            type="checkbox"
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
                            x
                        </button>
                    </li>
                )
            })}
        </ul>
    );
}