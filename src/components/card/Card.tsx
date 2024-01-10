import { useState, useEffect } from "react"

import "./Card.css"
import { doRequest } from "../../services/api"
import { formatTime } from "../../helpers/mask"

type Props = {
    api: string
    seconds: number
}

type ResponseAPI = {
    success: boolean
    hostname: string
    message: string
    time?: number
}

export function Card({ api, seconds }: Props) {
    const [data, updateData] = useState<ResponseAPI>({
        success: true,
        message: "",
        hostname: "",
        time: undefined
    })

    const { success, message, hostname, time } = data
    const status = success ? "healthy" : "error"

    useEffect(() => {
        doRequest<ResponseAPI>(api).then(updateData)

        const intervalId = setInterval(() => {
            doRequest<ResponseAPI>(api).then(updateData)
        }, seconds * 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [api, seconds])

    return (
        <div className={`card ${status}`}>
            <h3 className="card-title">{api}</h3>
            <p className="card-status">{status}</p>
            <p className="card-host">{hostname}</p>
            <p className="card-info">{success ? formatTime(time) : message}</p>
        </div>
    )
}
