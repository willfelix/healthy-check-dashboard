import "./Home.css"

import apiList from "../../data.json"
import { Card } from "../../components/card/Card"

export default function Home() {
    return (
        <div>
            <header>
                <h2>Healthy Check Dashboard</h2>
            </header>

            <div className="card-container">
                {apiList.map((api) => (
                    <Card
                        key={api.name}
                        api={api.name}
                        seconds={api.interval}
                    />
                ))}
            </div>
        </div>
    )
}
