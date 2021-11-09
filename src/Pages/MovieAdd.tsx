import {supabase} from "../supabaseClient";
import {useRef} from "react";

export function MovieAdd() {
    let result;

    let titleRef = useRef<HTMLInputElement>(null);
    let descriptionRef = useRef<HTMLTextAreaElement>(null);

    function addMovie() {
        let title = titleRef.current?.value;
        let description = descriptionRef.current?.value

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

            Title
            <input type="text" ref={titleRef}/>

            <br/>
            Description
            <textarea ref={descriptionRef}/>

            <button onClick={addMovie}>Save</button>

            <p>{JSON.stringify(result)}</p>
        </div>
    )
}
