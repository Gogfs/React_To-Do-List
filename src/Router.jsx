import { Route, Routes } from "react-router-dom"
import { Home, About } from "./components"
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout"
import { Error404 } from "./components/Pages/Erro404/Error404"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='*' element={<Error404 />} />
            </Route>
        </Routes>
    )
}

export { Router }