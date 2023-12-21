import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/models/ModelSection'), { ssr: false })

export default function Home() {
  return <Scene />;
}
