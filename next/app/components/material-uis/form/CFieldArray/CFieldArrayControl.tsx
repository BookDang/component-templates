'use client'

import React, { use } from 'react'
import { FieldValues, useForm, useFormContext } from 'react-hook-form'
import {
  CControlType,
  CInputTypes,
} from '@/app/components/material-uis/form/form-types'
import CLabel from '@/app/components/material-uis/form/CLabel'
import { genericMemo } from '@/app/components/material-uis/form/common-type'
import CFieldArray from '@/app/components/material-uis/form/CFieldArray/CFieldArray'

type CFieldArrayControlProps<T> = CControlType & {
  inputType?: CInputTypes
  label: string
  defaultAddValue: T
  limitRemove?: number
  inputKeys?: string[]
}

const CFieldArrayControl = <T extends FieldValues>(
  props: CFieldArrayControlProps<T>,
) => {
  const {
    formState: { errors },
    getValues,
  } = useFormContext()

  // const checkNestArray = (keyName: any) => {
  //   // Check if address is an array
  //   if (Array.isArray(keyName)) {
  //     for (let index = 0; index < keyName.length; index++) {
  //       const element = keyName[index]
  //       console.log('element', element)
  //       checkNestArray(element)
  //     }
  //   } else {
  //     if (typeof keyName === 'object') {
  //       for (const key in keyName) {
  //         if (Object.prototype.hasOwnProperty.call(keyName, key)) {
  //           console.log('key', key)
  //           checkNestArray(keyName[key])
  //         }
  //       }
  //     } else {
  //       console.log('keyName', keyName)
  //     }
  //   }
  // }

  // React.useEffect(() => {
  //   checkNestArray(getValues(props.keyName))
  // }, [])

  return (
    <>
      <CLabel label={props.label} keyName={props.keyName} rules={props.rules} />
      <CFieldArray<T>
        rules={props.rules}
        keyName={props.keyName}
        inputType={props.inputType}
        defaultAddValue={props.defaultAddValue}
        limitRemove={props.limitRemove}
        inputKeys={props.inputKeys}
      />
    </>
  )
}

export default genericMemo(CFieldArrayControl)
