'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './button'

const FormButton = ({ text }) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="flex gap-3 disabled:opacity-70"
    >
      {pending ? 'Loading...' : text}
    </Button>
  )
}

export default FormButton
