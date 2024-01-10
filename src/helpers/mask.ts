export function formatTime(timestamp?: number) {
    if (!timestamp || isNaN(timestamp)) return timestamp

    const d = new Date(timestamp)
    const hours = d.getHours().toString().padStart(2, "0")
    const minutes = d.getMinutes().toString().padStart(2, "0")
    const seconds = d.getSeconds().toString().padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
}
