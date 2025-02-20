'use client'

import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Button } from '@/components/button'

import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const substriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido')
})

export function SubscriptionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(substriptionSchema)
  })

  function onSubstribe(data: any) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubstribe)}
      className="bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className='space-y-2'>
          <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" {...register('name')} />
        </InputRoot>
        </div>

        <div className='space-y-2'>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField type="email" placeholder="E-mail" {...register('email')} />
          </InputRoot>
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
