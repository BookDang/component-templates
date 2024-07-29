import React from 'react'
import {
  useForm,
  FormProvider,
  FieldValues,
  DefaultValues,
} from 'react-hook-form'

type CFormProps<T> = {
  children?: React.ReactNode
  formData: T
}

const CForm = <T extends FieldValues>(props: CFormProps<T>) => {
  const methods = useForm<T>({
    defaultValues: props.formData as DefaultValues<T>,
  })

  return (
    <FormProvider {...methods}>
      <form>{props.children}</form>
    </FormProvider>
  )
}

export default CForm
