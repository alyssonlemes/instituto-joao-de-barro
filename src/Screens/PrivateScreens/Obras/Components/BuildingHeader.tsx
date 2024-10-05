import { Link } from "react-router-dom"
import { Scroll, Storefront } from "phosphor-react"

interface BuildingHeaderProps {
    title: string;
}

export const Header = ({title}: BuildingHeaderProps) => {
    return (
        <section className="building-header">
            <h1>{title}</h1>
            <div>
                <Link  to="/dashboard/obras" title="Obras">
                    <Scroll size={24} /> 
                </Link>
            </div>
        </section>
    )
}