import React from "react";
import {PageRoutes} from "../interfaces/page-routes";

const ListMovie = React.lazy(() => import('../Pages/MovieList'))

export const ListMovieUrl = 'list-movie'

export const routeMap: PageRoutes[] = [
    {
        path: ListMovieUrl,
        component: ListMovie
    }
];
