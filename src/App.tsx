import Header from "./components/Header";

const pages = [
    "Compositing",
    "Transformations",
    "Curves",
    "Tri Meshes",
    "Shading",
    "Ray Tracing",
    "Animation",
];
function App() {
    return (
        <section className="color-surface-secondary h-screen">
            <Header pages={pages} />
        </section>
    );
}

export default App;
