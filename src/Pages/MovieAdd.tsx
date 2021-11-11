import {supabase} from "../supabaseClient";
import {useRef, useState} from "react";
import {Box, Button, TextField} from "@mui/material";

export function MovieAdd() {
    let result;

    let titleRef = useRef<HTMLInputElement>(null);
    let descriptionRef = useRef<HTMLTextAreaElement>(null);

    let [title, setTitleValue] = useState("");
    let [description, setDescriptionValue] = useState("");

    function addMovie() {
        // let title = titleRef.current?.value;
        // let description = descriptionRef.current?.value

        supabase.from("movies").insert({
            title: title,
            description: description,
        }).then(r => {
            console.log('result', r);
            result = r;
        });

    }

    return (
        <div>
            <button>Back</button>
            <h2>Add Movie</h2>
            <Box component={"form"}
                 sx={{
                     '& .MuiTextField-root': {m: 1, width: '100%'}
                 }}>
                {/*Title*/}
                {/*<input className={"border rounded"} type="text" ref={titleRef}/>*/}
                <TextField label={"Title"} onChange={event => setTitleValue(event.target.value)}/>

                {/*<br/>*/}
                {/*Description*/}
                {/*<textarea className={"border"} ref={descriptionRef}/>*/}
                <TextField id="outlined-multiline-static"
                           multiline label={"Description"} onChange={event => setDescriptionValue(event.target.value)}
                           rows={4}/>
            </Box>
            <Button variant={"outlined"} className={"border bg-purple-600"} onClick={addMovie}>Save</Button>

            <p>{JSON.stringify(result)}</p>
        </div>
    )
}
