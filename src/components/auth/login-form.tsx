import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

export function Form() {
  return (
    <form className='space-y-3'>
      <div className='flex flex-col gap-y-2 '>
        <label
          htmlFor='email'
          className='font-semibold'
        >
          Email
        </label>
        <Input
          type='email'
          id='email'
          name='email'
          aria-label='email'
        />
      </div>
      <div className='flex flex-col gap-y-2 mb-4'>
        <label
          htmlFor='password'
          className='font-semibold'
        >
          Password
        </label>
        <Input
          type='password'
          id='password'
          name='password'
          aria-label='password'
        />
      </div>
      <section className='flex flex-col gap-y-6'>
        <Button
          type='submit'
          onClick={() => {}}
          className='bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700'
        >
          Login
        </Button>
        <Separator />
        <Button
          type='button'
          className='bg-malachite-500 text-malachite-950 hover:bg-malachite-600 active:bg-malachite-700'
          onClick={() => {}}
        >
          Login as Guest
        </Button>
      </section>
    </form>
  )
}
