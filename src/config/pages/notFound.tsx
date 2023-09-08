import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function NotFound() {
    return (
        <>
            <nav>
                <Link to="/">Products Page</Link>
            </nav>
            <Typography>404 NOT FOUND</Typography>
        </>
    )
}