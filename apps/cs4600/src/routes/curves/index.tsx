import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/curves/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/curves/"!</div>
}
