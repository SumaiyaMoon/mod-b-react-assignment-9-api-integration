import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/products";
import SingleProduct from "../pages/singleProduct";
import NotFound from "../pages/notFound";

export default function AppRouter(){
    return(
        <>
        <Router>
<Routes>
<Route path="/" element={<Product/>}></Route>
<Route path="singleProduct/:id" element={<SingleProduct/>}></Route>
<Route path="*" element={<NotFound />} />
</Routes>
        </Router>
        </>
    )
}