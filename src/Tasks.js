import './styles/Tasks.css';

export default function Tasks(props){

    return (
        <ul>
            {props.data.sort((x, y) => {
                return (x.done === y.done)? 0 : x.done ? 1 : -1;
            }).map(item => {
                return(
                    <li key={item.key} className={item.done && "done"}>
                        <input 
                            type="checkbox"
                            onChange={(e) => {props.onCheckbox(e.target.checked, item.key)}}
                        />
                        <span>{item.title}</span>
                    </li>
                )
            })}
        </ul>
    );
}