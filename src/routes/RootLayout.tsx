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
        <main className="h-dvh flex flex-col">
            <Header pages={Routes} />
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    );
}

export default RootLayout;
