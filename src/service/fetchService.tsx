export interface fetchProps {
    url: string;
    method?: 'GET' | 'POST';
    body?: object;
    authToken?: string;
    abortController?: AbortController;
}

export const fetchService = async ({
    url,
    method = 'GET',
    body,
    authToken = '',
    abortController,
}: fetchProps) => {
    const response = await fetch(`http://192.168.1.14:3100/${url}`, {
        signal: abortController?.signal,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
        },
        body: JSON.stringify(body),
    });
    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
};
