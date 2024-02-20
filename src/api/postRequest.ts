type ContentType =
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";

export default async function postRequest<T>(
    url: string,
    data: Record<string, any> | FormData,
    token: string | null,
    contentType: ContentType = "application/json"
): Promise<T> {
    try {
        const headers: HeadersInit = {};

        // For FormData, don't manually set the Content-Type.
        // The browser will set it correctly for FormData, including the boundary.
        if (contentType !== "multipart/form-data") {
            headers["Content-Type"] = contentType;
        }

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        let body;
        if (contentType === "application/json") {
            body = JSON.stringify(data);
        } else if (contentType === "application/x-www-form-urlencoded") {
            body = new URLSearchParams(data as Record<string, any>).toString();
        } else {
            // For multipart/form-data, the data should be a FormData object.
            body = data as FormData;
        }

        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to execute postRequest:", error);
        throw new Error("Failed to execute postRequest");
    }
}
