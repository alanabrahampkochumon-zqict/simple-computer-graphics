import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compositing/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/compositing/"!</div>;
}
