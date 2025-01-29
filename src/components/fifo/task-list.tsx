import { Task } from '../../interfaces/tasks'

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className='flex-grow'>
      {tasks.length === 0 && <p className='text-zinc-400'>No items in the queue.</p>}
      {tasks.map(task => (
        <li
          key={task.id}
          className='text-sm'
        >
          {task.content}
        </li>
      ))}
    </ul>
  )
}
