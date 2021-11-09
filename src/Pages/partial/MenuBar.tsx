import {Link} from "react-router-dom";
import * as React from "react";
import './menu-bar.css'

export default function MenuBar() {
    return (
        <>
            <nav>
                <Link to="/">
                    <button className={'btn-menu'}>
                        Home
                    </button>
                </Link>
                {/*<Link to="/lists">*/}
                {/*    <button className={'btn-menu'}>*/}
                {/*        Movies*/}
                {/*    </button>*/}
                {/*</Link>*/}
                <Link to="/about">
                    <button className={"btn-menu"}>
                        About
                    </button>
                </Link>
            </nav>
        </>
    );
}
