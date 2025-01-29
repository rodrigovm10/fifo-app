import { Form } from '../components/register-form/form'

import { Card, CardContent, CardTitle } from '../components/ui/card'

export function Login() {
  return (
    <Card className='w-10/12 md:w-1/2 lg:w-1/4'>
      <CardTitle>Welcome</CardTitle>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  )
}
