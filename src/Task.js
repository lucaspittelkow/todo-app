import './styles/Task.css';

export default function Task(props){
    return(
        <li>
            
            {props.children}
        </li>
    );
}