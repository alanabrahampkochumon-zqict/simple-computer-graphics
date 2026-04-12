import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/animation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/animation/"!</div>
}
