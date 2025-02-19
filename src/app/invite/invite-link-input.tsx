import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { IconButton } from '@/components/icon-button'
import { Copy, Link } from 'lucide-react'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue={'http://localhost:3000/invite/23123213212'}
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
