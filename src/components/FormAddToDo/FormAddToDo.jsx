import { useState } from "react"
import { Button } from "../Button/Button"
import { TextField } from "../TextField"
import { useAppContext } from "../../hooks/useAppContext"
import { Loading } from "../Loading/Loading"

import style from './FormAddToDo.module.css'


const FormAddToDo = () => {
    const[toDoName, setToDoName] = useState('')

    const { addToDo, addLoading } = useAppContext()

    // function that change the value of the text field
    const onChangeToDoName = (event) => {
        setToDoName(event.currentTarget.value)
    }

    // function that add a new to-do
    const submitForm = (event) => {
        event.preventDefault()

        if(!toDoName){
            return
        }

        addToDo(toDoName)
        
        setToDoName('')
    }

    return(
        <form className={style.FormAddToDo} onSubmit={submitForm}>
            <TextField value={toDoName} onChange={onChangeToDoName}/>
            <Button text={addLoading ? <Loading /> : '+'} />
        </form>
    )
}

export { FormAddToDo }