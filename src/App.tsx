import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MovieList from "./Pages/MovieList";
import {Home} from "./Pages/Home";
import {MovieAdd} from "./Pages/MovieAdd";
import MenuBar from "./Pages/partial/MenuBar";
import {About} from "./About";

function App() {
    return (
        <>
            <div className="App md:container">
                <h1>Welcome to Movie</h1>

                {/*<Routes>*/}
                {/*    {routeMap.map(({path, component}, index) => {*/}
                {/*        <Route path={path} element={component}>*/}
                {/*        </Route>*/}
                {/*    })}*/}
                {/*</Routes>*/}

                <MenuBar/>

                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/lists"} element={<MovieList/>}/>
                    <Route path={"/add-movie"} element={<MovieAdd/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>

                {/*<header className="App-header">*/}
                {/*  <img src={logo} className="App-logo" alt="logo" />*/}
                {/*  <p>*/}
                {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*  </p>*/}
                {/*  <a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*  >*/}
                {/*    Learn React*/}
                {/*  </a>*/}
                {/*</header>*/}
            </div>
        </>
    );
}

export default App;
