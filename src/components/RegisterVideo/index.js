import React from "react";
import { StyledRegisterVideo } from "./styles";
import {createClient} from "@supabase/supabase-js"

function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            console.log(e.target.value)
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm(){
            setValues({});
        }
    };
}

const PROJECT_URL = "https://zxmwlxsvniiodmyzwlrb.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bXdseHN2bmlpb2RteXp3bHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTEzMzIsImV4cCI6MTk4Mzk2NzMzMn0.2uyglrZjqGAqwo--uOjiLn8rJY8A4epUJ2iyVrfVzqQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

// get youtube thumbnail from video url
function getThumbnail(url) {
    const resultado_split = url.split("v=")
    console.log(`Resultado do split ${resultado_split[1]}`)
    return `https://img.youtube.com/vi/${resultado_split[1]}/hqdefault.jpg`
}


export default function RegisterVideo() {
    const formCadastro = useForm({ 
        initialValues: {categoria:"Curiosidades", titulo: "Como o café te manipula", url: "https://www.youtube.com/watch?v=pd28XMtgQys"}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: formCadastro.values.categoria,
                        })
                        .then((oqueveio) => {
                            console.log(`index.js do register video, input: ${oqueveio}`);

                        })
                        .catch((err) => {
                            console.log(err);
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <div>
                            <label>Categoria do Vídeo</label>
                            <input 
                            placeholder="Categoria do Vídeo"
                            name="categoria"
                            value={formCadastro.values.categoria}
                            onChange={formCadastro.handleChange}
                            />
                            <label>Titulo do Vídeo</label>
                            <input 
                            placeholder="Titulo do Vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                            />
                            <label>URL</label>
                            <input 
                            placeholder="URL"
                            name="url" 
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}/>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )

}