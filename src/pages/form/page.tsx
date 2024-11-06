import { SharedUi, SharedLib } from '@shared'
import { useMutation } from '@tanstack/react-query'
import { FormApi, FormLib } from '@modules/form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { required, email, validate } = SharedLib.Utils

const rules = {
  email: [email(), required()],
  name: [required()],
  massage: [required()],
}

const defaultModelForm = { email: undefined, massage: undefined, name: undefined }

export function FormPage() {
  const navigate = useNavigate()

  const [error, setError] =
    useState<Partial<Record<keyof FormLib.TFormEntity, string>>>(defaultModelForm)
  const [modelForm, setModel] = useState<FormLib.TFormEntity>(defaultModelForm)

  const {
    mutate: createForm,
    isPending: isPendingForm,
    isSuccess: createFormSuccess,
  } = useMutation({
    mutationFn: FormApi.createForm,
    onSuccess: () => {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    },
  })

  const fillModel = (event: string, type: keyof FormLib.TFormEntity) => {
    setModel((prevState) => ({
      ...prevState,
      [type]: event,
    }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = validate<FormLib.TFormEntity>(modelForm, rules)
    if (result.isValid) {
      createForm(modelForm)
    } else {
      setError(result.errors)
    }
  }

  if (createFormSuccess) {
    return (
      <div className="flex h-full w-full flex-grow animate-fade-in-up flex-col items-center justify-center bg-gray-10 p-20">
        <h1>
          Message generated <br />
          on the server
        </h1>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-10 p-20">
      <h1>Only CTA on the page</h1>
      <form
        className="flex w-[20rem] flex-col gap-4 rounded-[0.5rem] border border-solid border-gray-200 bg-white p-8"
        onSubmit={onSubmit}
      >
        <SharedUi.Input
          label="Name"
          placeholder="value"
          onChange={(event) => fillModel(event, 'name')}
          required
          error={error.name}
        />
        <SharedUi.Input
          label="Email"
          placeholder="value"
          onChange={(event) => fillModel(event, 'email')}
          required
          error={error.email}
        />
        <SharedUi.TextArea
          label="Massage"
          placeholder="value"
          onChange={(event) => fillModel(event, 'massage')}
          required
          error={error.massage}
        />
        <SharedUi.Button label="Submit" type="submit" disabled={isPendingForm} />
      </form>
    </div>
  )
}
