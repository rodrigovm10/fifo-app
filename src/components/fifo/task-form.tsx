import { Dispatch, SetStateAction, useState } from 'react'
import { Task } from '../../interfaces/tasks'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export function TaskForm({ setTasks }: { setTasks: Dispatch<SetStateAction<Task[]>> }) {
  const [task, setTask] = useState<Task | null>(null)
  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!value) {
      setTask(null)
      return
    }

    const newTask = {
      id: new Date().getDate().toString(),
      content: value,
    }

    setTask(newTask)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (task) {
      setTasks(prevTasks => {
        const taskExist = prevTasks.some(t => t.content === task.content)

        if (taskExist) return prevTasks

        return [...prevTasks, task]
      })
      setTask(null)
    }
  }

  return (
    <section>
      <form
        className='flex flex-col gap-y-6'
        onSubmit={handleSubmit}
      >
        <label
          htmlFor='task'
          className='font-semibold'
        >
          Add to Queue <span className='text-red-500'>*</span>
        </label>
        <Input
          type='text'
          id='task'
          name='task'
          value={task?.content || ''}
          onChange={handleChangeTask}
        />
        <Button
          type='submit'
          className='disabled:cursor-not-allowed disabled:bg-zinc-500 disabled:text-white'
          disabled={!task?.content}
        >
          Add Item
        </Button>
      </form>
    </section>
  )
}
