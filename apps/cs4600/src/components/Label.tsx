import type { ReactNode } from "react";

function Label({ children }: { children: ReactNode }) {
    return (
        <p className="color-content-primary text-base font-semibold">
            {children}
        </p>
    );
}

export default Label;
