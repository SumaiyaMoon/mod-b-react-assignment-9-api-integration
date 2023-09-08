import { Link } from "react-router-dom";
import { Typography, Box, Paper, Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
    const params = useParams();
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
const [singlePostData, setSinglePostData] = useState({} as productProps)
let getSingleData = ()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then((res)=>{
        // console.log(res.data)
        setSinglePostData({...res.data})
        // console.log(singlePostData)
    }).catch((err)=>{
        console.log(err)

    })
}
getSingleData();
    return (
        <>
            <nav>
                <Link to="/">Products Page</Link>
            </nav>
            <Typography>Single Product Page</Typography>
            <Box className="container d-flex align-items-stretch justify-content-around row">
                   
                        <Paper  className="p-3 m-3 col-md-6">
                            <div className="p-2  m-2 w-100 text-center"><img src={singlePostData.image} alt="img" width={100} /></div>
                            <Typography variant="h6" className="text-start"><b>Title:</b> {singlePostData.title}</Typography>
                            <Typography variant="body1" className="text-start"><b>Category:</b> {singlePostData.category}</Typography>
                            <Typography variant="h5" className="text-start fw-bold"><b>Price:</b> {singlePostData.price}</Typography>
                            <Typography variant="body1" className="text-start"><b>Description:</b> {singlePostData.description}</Typography>
                            <Typography variant="body1" className="text-start"><b>Rate:</b> {singlePostData?.rating?.rate}</Typography>
                            <Typography variant="body1" className="text-start"><b>Count:</b> {singlePostData?.rating?.count}</Typography>
                            <Typography variant="body1" className="text-start"><b>Id:</b> {singlePostData.id}</Typography>
                        </Paper>
                   
                </Box>
        </>
    )
}