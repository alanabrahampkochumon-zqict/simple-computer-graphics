import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/raytracing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/raytracing/"!</div>
}
