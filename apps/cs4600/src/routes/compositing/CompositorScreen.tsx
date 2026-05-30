import AdjustmentPanel from "./components/AdjustmentPanel";
import {useEffect, useRef} from "react";

function CompositorScreen() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        if (canvasRef.current != null) {
            const context = canvasRef.current.getContext("2d")
            if (context == null) {
                alert("[Error]: 2D context not found! Application will not work")
                return;
            }
            const rect = canvasRef.current.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1

            const displayWidth = Math.round(rect.width * dpr)
            const displayHeight = Math.round(rect.height * dpr)


            canvasRef.current.width = displayWidth
            canvasRef.current.height = displayHeight
            context.fillStyle = "green"
            context.fillRect(canvasRef.current.width - 100, canvasRef.current.height - 100, 100, 100)
        }
    }, [canvasRef])

    return (
        <section className="flex flex-1 min-h-0 basis-0 color-surface-secondary ">
            <div className="relative flex-1 min-w-0 min-h-0">
                <canvas className="absolute inset-0 w-full h-full block" ref={canvasRef}/>
            </div>
            <AdjustmentPanel/>
        </section>
    );
}

export default CompositorScreen;
