import { TaskList } from './task-list'
import { Separator } from '../ui/separator'
import { Task } from '../../interfaces/tasks'
import { TaskQueueTitle } from './task-queue-title'
import { TaskQueueButtons } from './task-queue-buttons'

interface TaskQueueProps {
  tasks: Task[]
  onAttendQueue: () => void
}

export function TaskQueue({ tasks, onAttendQueue }: TaskQueueProps) {
  return (
    <section className='flex flex-col h-full'>
      <TaskQueueTitle />
      <Separator />
      <TaskList tasks={tasks} />
      <TaskQueueButtons onAttendQueue={onAttendQueue} />
    </section>
  )
}
