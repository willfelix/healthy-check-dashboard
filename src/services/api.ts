export async function doRequest<T>(apiName: string): Promise<T> {
    try {
        const endpoint = `${apiName}/health/status`
        const url = `${process.env.REACT_APP_API_URL}/${endpoint}`
        const response = await fetch(url)
        const data = await response.json()

        return data as T
    } catch (error) {
        return {
            hostname: "OUTAGE",
            message: "403 Forbidden"
        } as T
    }
}
