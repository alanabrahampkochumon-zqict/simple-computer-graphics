import { createFileRoute } from "@tanstack/react-router";
import CompositorScreen from "./CompositorScreen";

export const Route = createFileRoute("/compositing/")({
    component: CompositorScreen,
});
