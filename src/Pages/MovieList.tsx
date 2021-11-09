import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {supabase} from "../supabaseClient";
import {MovieItem} from "../interfaces/movie-item";
import {RealtimeSubscription} from "@supabase/realtime-js";

export default function MovieList() {
    let subscription: RealtimeSubscription;
    let [listMovie, setListMovie]: [MovieItem[], any] = useState([]);

    useEffect(() => {
        fetchMovies().catch(console.error);

        listenMovieList();
    }, [])

    const fetchMovies = async () => {
        let {data, error} = await supabase
            .from('movies')
            .select("*");

        if (error) console.error(error)
        else { // @ts-ignore
            setListMovie(data)
        }

        console.log('list-movie', listMovie)
    }

    function listenMovieList() {
        subscription = supabase
            .from('movies')
            .on('*', (data) => {
                console.log('data received', JSON.stringify(data))

                fetchMovies().then(console.info).catch(console.error);
            }).subscribe();
    }

    const deleteMovie = async (id: any) => {
        let _delete = await supabase
            .from('movies')
            .delete()
            .eq('id', id)

        await fetchMovies()
    }

    return (
        <>
            <h1>Movie List</h1>
            <Link to={"/add-movie"}>
                <button>Add</button>
            </Link>
            <button onClick={fetchMovies}>Refresh</button>
            <hr/>
            {
                listMovie.map((x) => (
                    <div>
                        <h1>{x.title}</h1>
                        <h5>{x.created_at}</h5>
                        <p>{x.description}</p>
                        <button onClick={event => deleteMovie(x.id)} title={"Delete"}>X</button>
                    </div>
                ))
            }
            <div>

            </div>

        </>
    );
}

