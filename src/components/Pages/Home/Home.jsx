import { FormAddToDo } from "../../FormAddToDo"
import { ToDoList } from "../../ToDoList/ToDoList"
import style from './Home.module.css'

const Home = () => {
    return(
        <div className={style.Home}>
            <FormAddToDo />
            <ToDoList /> 
        </div>
    )
}

export { Home }