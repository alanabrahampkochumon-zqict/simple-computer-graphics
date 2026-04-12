import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/Header";

const Routes: PageRoute[] = [
    { title: "Compositing", link: "/compositing" },
    { title: "Transformations", link: "/transformations" },
    { title: "Curves", link: "/curves" },
    { title: "Tri Meshes", link: "/trimeshes" },
    { title: "Shading", link: "/shading" },
    { title: "Ray Tracing", link: "/raytracing" },
    { title: "Animation", link: "/animation" },
];

function RootLayout() {
    return (
        <>
            {/* <div className="p-2 flex gap-2">
                <Selector pages={Routes} />
            </div>
            <hr /> */}
            <Header pages={Routes} />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}

export default RootLayout;
