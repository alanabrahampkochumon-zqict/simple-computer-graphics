import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/transformations/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/transformations/"!</div>
}
