import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.Header}>
            <Link to='/'>
                <h1>
                    <span>ToDo </span>
                    List
                </h1>
            </Link>

            <Link to='About'>About</Link>
        </div>
    )
}

export { Header }