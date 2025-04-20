import { Outlet } from "react-router-dom"
import { Footer, Header } from "../../components"
import { useAppContext } from "../../hooks/useAppContext"

const DefaultLayout = () => {
    const { name } = useAppContext
    return (
        <>
            <Header />
            <Outlet/>
            <Footer name={name} />
        </>
    )
}

export { DefaultLayout }