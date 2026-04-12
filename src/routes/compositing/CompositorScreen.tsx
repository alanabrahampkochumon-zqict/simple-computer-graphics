import AdjustmentPanel from "./components/AdjustmentPanel";

function CompositorScreen() {
    return (
        <section className="flex flex-1 min-h-0 basis-0 color-surface-secondary">
            <div className="relative flex-1 min-w-0 min-h-0">
                <canvas className="absolute inset-0 w-full h-full block bg-red-50" />
            </div>
            <AdjustmentPanel />
        </section>
    );
}

export default CompositorScreen;
