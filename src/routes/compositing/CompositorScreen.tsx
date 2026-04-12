import AdjustmentPanel from "./components/AdjustmentPanel";

function CompositorScreen() {
    return (
        <section className="flex bg-amber-500 flex-1 min-h-0 basis-0">
            <div className="relative flex-1 min-w-0 min-h-0 bg-blue-500">
                <canvas className="absolute inset-0 w-full h-full block bg-red-500" />
            </div>
            <AdjustmentPanel />
        </section>
    );
}

export default CompositorScreen;
