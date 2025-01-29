import { Form } from '../components/auth/login-form'

import { Card, CardContent, CardFooter, CardTitle } from '../components/ui/card'
import { Link } from '../components/ui/link'

export function Register() {
  return (
    <Card className='w-10/12 md:w-1/2 lg:w-1/4'>
      <CardTitle>Welcome</CardTitle>
      <CardContent>
        <Form />
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Link to='/login'>Dont't have an account? Login.</Link>
      </CardFooter>
    </Card>
  )
}
