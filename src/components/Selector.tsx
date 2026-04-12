import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "../libs/utils";

type SelectionParams = {
    pages: PageRoute[];
};
function Selector({ pages }: SelectionParams) {
    const { pathname: currentPath } = useLocation();
    console.log(currentPath);

    return (
        <ul className="inline-flex gap-0 p-1.5 self-end color-surface-secondary rounded-full">
            {pages.map((page) => (
                <li
                    className={cn(
                        "color-content-tertiary ps-5 pe-5 pt-3 pb-3 rounded-full cursor-pointer",
                        currentPath === page.link &&
                            "font-semibold color-content-accent color-surface-primary shadow-sm", // TODO:Change to a separate div to animate
                    )}
                >
                    <Link to={page.link} className="[&.active]:font-bold">
                        {page.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Selector;
