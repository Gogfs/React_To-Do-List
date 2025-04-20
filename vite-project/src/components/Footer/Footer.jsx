import style from './Footer.module.css'

const Footer = (props) => {
    const { name } = props
    let year = (new Date()).getFullYear()

    return(
        <div className={style.Footer}>
           Basic React - {year} - {name}
        </div>
    )
}

export { Footer }