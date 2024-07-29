'use client'

import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import CInput from '@/app/components/material-uis/form/CInput/CInput'
import {
  CControlType,
  CInputTypes,
} from '@/app/components/material-uis/form/form-types'

type CFieldArrayProps<T> = CControlType & {
  inputType?: CInputTypes
  placeholder?: string
  defaultAddValue: T
  limitRemove?: number
  inputKeys?: string[]
}

const CFieldArray = <T,>(props: CFieldArrayProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: props.keyName,
  })

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div></div>
          <AddIcon
            className="-mt-3 mb-2 text-green-600 cursor-pointer hover:bg-green-500 hover:text-white p-1 rounded-full"
            onClick={() => {
              append(props.defaultAddValue)
            }}
          />
        </div>
        <ul>
          {fields.map((field, index) => (
            <li key={field.id}>
              <fieldset
                className={`grid ${props.limitRemove == fields.length ? '' : 'gap-4'} 
              grid-cols-[1fr,auto] items-center p-2 pt-4 mt-3 border border-gray-300 rounded-md`}
              >
                <div className="w-full" key={field.id}>
                  {props.inputKeys
                    ? props.inputKeys.map((key, i) => (
                        <CInput
                          rules={props.rules}
                          keyName={`${props.keyName}.${index}.${key}`}
                          placeholder={props.placeholder}
                          inputType={props.inputType}
                          keyObject={[props.keyName, index, key]}
                          key={i}
                        />
                      ))
                    : null}
                </div>
                {
                  // If limitRemove is not provided, it will be unlimited
                  props.limitRemove &&
                  props.limitRemove >= fields.length ? null : (
                    <RemoveIcon
                      className="-mt-2 text-red-600 cursor-pointer hover:bg-red-500 hover:text-white p-1 rounded-full"
                      onClick={() => {
                        remove(index)
                      }}
                    />
                  )
                }
              </fieldset>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CFieldArray
