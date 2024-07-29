'use client'

import React from 'react'
import {
  FieldValues,
  set,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import CDialog from '@/app/components/material-uis/dialog/CDialog'
import { genericMemo } from '@/app/components/material-uis/form/common-type'

type CDialogFormProps<T> = {
  children?: React.ReactNode
  handleSubmit: (data: T) => void
}

// Why create CDialogForm
// - Because useFormContext only works within a FormProvider
const CDialogForm = <T extends FieldValues>(props: CDialogFormProps<T>) => {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormContext<T>()

  const onSubmit: SubmitHandler<T> = async (data: T) => {
    await props.handleSubmit(data)
  }

  return (
    <>
      <CDialog
        headerTitle="Demo Dialog"
        otherLabel={<RestartAltIcon />}
        submitLabel="Submit"
        deleteLabel="Delete"
        isSubmitting={isSubmitting}
        submitAction={() => {
          handleSubmit(onSubmit)()
        }}
        otherAction={() => reset()}
        deleteAction={() => console.log('Delete')}
      >
        {props.children}
      </CDialog>
    </>
  )
}

export default genericMemo(CDialogForm)

// How to use CDialogForm:
// - CForm is used to wrap the form fields
// - CDialogForm is used to wrap the form fields
// - Inside CDialogForm, you can put any form fields

// <CForm<FormDataType> formData={{ ...inintialData }}>
//   <CDialogForm>
// <div className="gap-4 grid grid-cols-[auto_,1fr] w-full">
//   <CInputControl
//     keyName="name"
//     label="Your Name"
//     placeholder="Your name"
//     onBlur={e => {}}
//     onChange={e => {}}
//     rules={{ required: 'This field is required' }}
//   />
// </div>
//   <CDialogForm>
// </CDialogForm>
