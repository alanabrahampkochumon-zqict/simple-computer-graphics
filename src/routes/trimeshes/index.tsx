import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/trimeshes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/trimeshes/"!</div>
}
