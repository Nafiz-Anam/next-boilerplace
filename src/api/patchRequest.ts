type ContentType =
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";

export default async function patchRequest<T>(
    url: string,
    data: Record<string, any> | FormData,
    token: string | null,
    contentType: ContentType = "application/json"
): Promise<T> {
    try {
        const headers: HeadersInit = {};

        // Only set Content-Type for JSON and URL-encoded forms.
        // For FormData (used with multipart/form-data), the browser automatically sets the Content-Type
        // with the correct boundary parameter.
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
            // For multipart/form-data, `data` should be a FormData object.
            // The type checking ensures that we don't need to do anything special here,
            // as the fetch API and FormData work together to set the request body and Content-Type header.
            body = data as FormData;
        }

        const response = await fetch(url, {
            method: "PATCH",
            mode: "cors",
            headers: headers,
            redirect: "follow",
            body: body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to execute patchRequest:", error);
        throw new Error("Failed to execute patchRequest");
    }
}
