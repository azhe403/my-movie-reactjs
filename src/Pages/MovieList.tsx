import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {supabase} from "../supabaseClient";
import {MovieItem} from "../interfaces/movie-item";
import {RealtimeSubscription} from "@supabase/realtime-js";
import {Button, Card, CardActions, CardContent, List, Typography} from "@mui/material";

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
                <Button variant={"outlined"}>Add</Button>
            </Link>
            <Button variant={"outlined"} onClick={fetchMovies}>Refresh</Button>
            <hr/>
            <List>
                {
                    listMovie.map((x) => (
                        <Card className={"common-card"} sx={{minWidth: 275}} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {x.title}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    {x.created_at}
                                </Typography>
                                <Typography variant="body2">
                                    <p>
                                        {x.description}
                                    </p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Read More</Button>
                                <Button variant={"outlined"} className={""}
                                        onClick={event => deleteMovie(x.id)}>Delete</Button>
                            </CardActions>
                        </Card>

                        // <div>
                        //     <h1>{x.title}</h1>
                        //     <h5>{x.created_at}</h5>
                        //     <p>{x.description}</p>
                        //     <Button variant={"outlined"} onClick={event => deleteMovie(x.id)} title={"Delete"}>X</Button>
                        // </div>
                    ))
                }
            </List>
        </>
    );
}

