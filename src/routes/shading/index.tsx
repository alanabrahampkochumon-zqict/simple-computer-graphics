import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shading/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shading/"!</div>
}
