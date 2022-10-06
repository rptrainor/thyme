import { trpc } from '@/utils/trpc';
export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'ryan' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <h1 className="text-3xl font-bold underline">
      {hello.data.greeting}
    </h1>
  )
}