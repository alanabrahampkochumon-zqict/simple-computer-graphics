import { Link } from "@tanstack/react-router";

function Logo() {
    return (
        <Link className="inline-grid gap-0.5" to="/">
            <p className="text-5xl font-bold">
                <span className="color-content-accent">CS</span>
                <span className="color-content-secondary">4600</span>
            </p>
            <p className="text-sm font-light color-content-secondary text-end">
                By Cem Yuskel
            </p>
        </Link>
    );
}

export default Logo;
