import { useState } from 'react'
import { TaskForm } from '../components/fifo/task-form'
import { TaskQueue } from '../components/fifo/task-queue'
import { Task } from '../interfaces/tasks'
import { Card, CardContent, CardTitle } from '../components/ui/card'

export function Fifo() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAttendQueue = () => {
    if (tasks.length === 0) return

    setTasks(prevTasks => prevTasks.slice(1))
  }

  return (
    <Card className='w-11/12 px-2 h-1/2'>
      <CardTitle className='mb-6'>FIFO Management</CardTitle>
      <CardContent className='grid grid-cols-2 gap-x-4 h-full'>
        <TaskForm setTasks={setTasks} />
        <TaskQueue
          tasks={tasks}
          onAttendQueue={handleAttendQueue}
        />
      </CardContent>
    </Card>
  )
}
