import style from './Error404.module.css'

const Error404 = () => {
    return(
        <div className={style.Error404}>
            <h1>404</h1>
            <h2>Page not found :/</h2>
        </div>
    )
}

export { Error404 }