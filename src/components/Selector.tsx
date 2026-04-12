import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "../libs/utils";
import styles from "./Selector.module.css";

type SelectionParams = {
    pages: PageRoute[];
};
function Selector({ pages }: SelectionParams) {
    const { pathname: currentPath } = useLocation();
    console.log(currentPath);

    return (
        <ul className="inline-flex gap-0 p-1.5 self-end color-surface-secondary rounded-full isolate">
            {pages.map((page) => (
                <li className="inline-flex items-center" key={page.link}>
                    <Link
                        className={cn(
                            "color-content-tertiary ps-5 pe-5 pt-3 pb-3 rounded-full cursor-pointer items-center",
                            styles["selector-item"],
                            currentPath === page.link &&
                                "color-content-accent font-medium", //color-surface-primary
                            currentPath === page.link &&
                                styles["selector-selected"],
                        )}
                        to={page.link}
                    >
                        {page.title}
                    </Link>
                </li>
            ))}
            <div
                className={cn(
                    "color-surface-primary rounded-full shadow-sm",
                    styles.anchor,
                )}
            />
        </ul>
    );
}

export default Selector;
