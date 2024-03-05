
import { Link } from "react-router-dom"
export function Home() {

    return (
        <>

            <h1>Home</h1>
            <Link to="/product">Product</Link>
            <Link to="/product/new">New Product</Link>
        </>
    )

}
