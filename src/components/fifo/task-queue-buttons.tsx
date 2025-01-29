import { Button } from '../ui/button'

export function TaskQueueButtons({ onAttendQueue }: { onAttendQueue: () => void }) {
  return (
    <footer className='mt-auto flex flex-col gap-y-6'>
      <Button onClick={onAttendQueue}>Attend Task</Button>
      <Button className='bg-red-500 text-red-950 hover:bg-red-600 active:bg-red-700'>
        Log out
      </Button>
    </footer>
  )
}
