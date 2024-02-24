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
        }

    };

    return { error, loading, GetRequest };
}