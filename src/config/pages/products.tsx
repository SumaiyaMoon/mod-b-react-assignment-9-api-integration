import { Link } from "react-router-dom";
import { Typography, Box, Paper, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product() {

    type productProps = {
        category: string,
        description: string,
        id: number,
        image: string,
        price: number,
        rating: {
            rate: number,
            count: number
        },
        title: string,
    }
    const [productList, setProductList] = useState<productProps[]>([])
    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                // console.log(res.data)
                setProductList([...res.data])
                // console.log(productList)

            }).catch((err) => {
                console.log(err)
            })

    }
    getData()
    const navigate= useNavigate();
let getSinglePost = (id:number)=> {
navigate(`/singleProduct/${id}`)
}

    return (
        <>


            <nav>
                <Link to="singleProduct">Single Product Page</Link>
            </nav>


            <Typography>Products Page</Typography>
            <Box className="d-flex justify-content-center align-items-center flex-column border container">
                <Typography variant="h5" className="m-2">Products from Fake API</Typography>

                <Box className="container d-flex align-items-stretch justify-content-around row">
                    {productList.map((x, i) =>
                        <Paper onClick={()=>getSinglePost(x.id)} key={i} className="p-3 m-3 col-md-3">
                            <div className="p-2  m-2 w-100 text-center"><img src={x.image} alt="img" width={100} /></div>
                            <Typography variant="h6" className="text-start">{x.title}</Typography>
                            <Typography variant="body1" className="text-start">{x.category}</Typography>
                            <Typography variant="h5" className="text-start fw-bold">{x.price}</Typography>
                        </Paper>
                    )}
                </Box>
            </Box>
        </>
    )
}