import Image from 'next/image'
import DemoDialog from '@/app/components/material-ui/dialog/Demo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DemoDialog />
    </main>
  )
}
