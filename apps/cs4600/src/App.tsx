import Header from "./components/Header";

const pages: PageRoute[] = [
    { title: "Compositing", link: "/compositing" },
    { title: "Transformations", link: "/transformations" },
    { title: "Tri Meshes", link: "/trimeshes" },
    { title: "Shading", link: "/shading" },
    { title: "Ray Tracing", link: "/raytracing" },
    { title: "Animation", link: "/animation" },
];
function App() {
    return (
        <section className="color-surface-secondary h-screen">
            <Header pages={pages} />
        </section>
    );
}

export default App;
