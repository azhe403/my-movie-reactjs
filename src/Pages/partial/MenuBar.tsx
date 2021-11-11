import {Link} from "react-router-dom";
import * as React from "react";
import './menu-bar.css'
import {Box, Button} from "@mui/material";

export default function MenuBar() {
    return (
        <>
            <Box>

                <nav>
                    <Link to="/">
                        <Button variant={"outlined"} className={'btn-menu'}>
                            Home
                        </Button>
                    </Link>
                    {/*<Link to="/lists">*/}
                    {/*    <button className={'btn-menu'}>*/}
                    {/*        Movies*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                    <Link to="/about">
                        <Button variant={"outlined"} className={"btn-menu float-right"}>
                            About
                        </Button>
                    </Link>
                </nav>
            </Box>
        </>
    );
}
