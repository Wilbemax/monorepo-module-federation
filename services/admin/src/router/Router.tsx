import { App } from "@/Components/App";
import { LazyAbout } from "@/page/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const routes =  [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense><LazyAbout /></Suspense>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
export default routes
