import { Suspense } from "react"
import { App } from "@/Components/App"
import { Shop } from "@/page/shop"
import { createBrowserRouter } from "react-router-dom"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Suspense><Shop /></Suspense>
            }
        ]
    }
]


export const router = createBrowserRouter(routes)
export default routes