import { useState } from "react";


export const useFetch = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const urlBase = import.meta.env.PROD ? VITE_APP_PROD_API_BASE_URL : import.meta.env.VITE_APP_DEV_API_BASE_URL

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
            setError(null)
        
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
                setError(json.error.message[0].value)
            }
            
        } catch (error) {
            setError("Erro ao carregar os dados!")
            setLoading(false)
        }
    }

    return { error, loading, GetRequest, PostRequest, };
}