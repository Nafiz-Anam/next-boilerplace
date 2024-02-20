export async function deleteRequest<T>(
    url: string,
    params: Record<string, string | number | boolean> = {},
    token: string | null
): Promise<T> {
    try {
        // Construct query string from params object
        const queryString = new URLSearchParams(params as any).toString();
        const fullUrl = queryString ? `${url}?${queryString}` : url;

        const headers: HeadersInit = {};

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(fullUrl, {
            method: "DELETE",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to execute deleteRequest:", error);
        throw new Error("Failed to execute deleteRequest");
    }
}
