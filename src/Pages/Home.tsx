import * as React from "react";
import MovieList from "./MovieList";

export function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>

            <MovieList/>
            {/*<nav>*/}
            {/*    <Link to="/about">About</Link>*/}
            {/*    <Link to="/lists">Movies</Link>*/}
            {/*</nav>*/}
        </>
    );
}
