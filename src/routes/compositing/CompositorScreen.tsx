import AdjustmentPanel from "./components/AdjustmentPanel";

function CompositorScreen() {
    return (
        <section className="bg-amber-200 h-full w-full flex">
            <canvas className="bg-red-50 h-full w-full" />
            <AdjustmentPanel />
        </section>
    );
}

export default CompositorScreen;
