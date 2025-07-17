import { github } from "@libs/axios";
import { useEffect, useState } from "react";

interface UseGithubProps {
    url: string
}

export default function useGithub<T>({ url }: UseGithubProps) {
    const [data, setData] = useState<T | null>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setIsLoading] = useState(true);

    async function handleFetch(path: string) {
        try {
            const { data } = await github.get(path);
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleFetch(url);
    }, [url]);

    return { data, error, isLoading };
}