import { useState } from "react";

export const useFetch = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const urlBase = "https://localhost:7236/api/"

    const GetRequest = async (url) => {
        try {
            const response = await fetch(urlBase + url)
            const json = await response.json();
            setLoading(false)

            return json;

        } catch (error) {
            setError("Erro ao carregar os dados!")
            setLoading(false)
        }
    };

    const PostRequest = async (data, url) => {
        try {
    
            const response = await fetch(urlBase + url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
    
            var json = await response.json();
       
            if(json.success){
               return json;
            }

            if (json.error.code === "BadRequest") {
                console.log(json.error.message[0].value)
                setError(json.error.message[0].value)
            }
            
        } catch (error) {
            setError("Erro ao carregar os dados!")
            setLoading(false)
        }
    }

    return { error, loading, GetRequest, PostRequest };
}