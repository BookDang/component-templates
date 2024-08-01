'use client'

import React from 'react'
import CForm from '@/app/components/material-uis/form/CForm'
import CInputControl from '@/app/components/material-uis/form/CInput/CInputControl'
import useDialogStore from '@/app/components/material-uis/dialog/useDialogStore'
import CSelectControl from '@/app/components/material-uis/form/CSelect/CSelectControl'
import CDialogForm from '@/app/components/material-uis/form/CDialogForm/CDialogForm'
import CFieldArrayControl from '@/app/components/material-uis/form/CFieldArray/CFieldArrayControl'

const professions = ['Developer', 'Designer', 'Manager', 'Tester', 'DevOps']
const professionConsts = [...professions.map(profession => profession)] as const

type addressesType = {
  ward?: string
  district?: string
}

type FormDataType = {
  name: string
  age: number
  profession: (typeof professionConsts)[number]
  addresses: addressesType[]
}

const inintialData: FormDataType = {
  name: 'John Smith',
  age: 25,
  profession: 'Developer',
  addresses: [
    {
      ward: 'Ward 1',
      district: 'District 1',
    },
    {
      ward: 'Ward 2',
      district: 'District 2',
    },
  ],
}

const inputAddressKeys = ['ward', 'district']

type NestedFormProps = {}

const Demo = () => {
  const openRender = useDialogStore(state => state.openRender)
  const isRender = useDialogStore(state => state.isRender)
  return (
    <>
      <button onClick={openRender}>Open My Dialog</button>
      {isRender && <NestedForm />}
    </>
  )
}

export default React.memo(Demo)

export const NestedForm: React.FC<NestedFormProps> = props => {
  const handleSubmit = (data: FormDataType) => {
    console.log('NestedForm handleSubmit', data)
  }

  return (
    <CForm<FormDataType> formData={{ ...inintialData }}>
      <CDialogForm<FormDataType> handleSubmit={handleSubmit}>
        <div className="gap-4 grid grid-cols-[auto_,1fr] w-full">
          <CInputControl
            keyName="name"
            label="Your Name"
            placeholder="Your name"
            onBlur={e => {}}
            onChange={e => {}}
            rules={{ required: 'This field is required' }}
          />
          <CInputControl
            keyName="age"
            label="Age"
            placeholder="18"
            inputType="number"
            cSX={{ width: '100px' }}
          />
          <CSelectControl
            keyName="profession"
            label="Profession"
            options={professions}
            rules={{ required: 'This field is required' }}
          />
          <CFieldArrayControl<addressesType>
            defaultAddValue={{
              ward: '',
              district: '',
            }}
            keyName="addresses"
            label="Addresses"
            inputType="text"
            limitRemove={1}
            rules={{ required: 'This fields is required' }}
            inputKeys={inputAddressKeys}
          />
        </div>
      </CDialogForm>
    </CForm>
  )
}
