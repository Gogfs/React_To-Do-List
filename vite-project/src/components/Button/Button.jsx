import style from './Button.module.css'
import {TIPO_BOTAO} from './const.js'

const Button = (props) => {
    const { text, type = TIPO_BOTAO.PRIMARIO, ...otherProps } = props

    return(
        <button className={style.Button} type={type} {...otherProps}>{text}</button>
    )
}

export { Button }