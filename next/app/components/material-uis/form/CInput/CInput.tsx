import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { OutlinedInput } from '@mui/material'
import {
  CControlType,
  CInputTypes,
} from '@/app/components/material-uis/form/form-types'

type CInputControlProps = CControlType & {
  inputType?: CInputTypes
  keyObject?: (string | number)[]
}

const CInputControl: React.FC<CInputControlProps> = props => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  function getNestedValue(obj: any, keys: (number | string)[]): any {
    return keys.reduce((acc, key) => acc && acc[key], obj)
  }

  return (
    <>
      <div className="w-full">
        <Controller
          control={control}
          name={props.keyName}
          rules={props.rules}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <OutlinedInput
              type={props.inputType || 'text'}
              onChange={e => {
                onChange(e)
                if (props.onChange) {
                  props.onChange(e)
                }
              }}
              onBlur={e => {
                onBlur()
                if (props.onBlur) {
                  props.onBlur(e)
                }
              }}
              value={value}
              inputRef={ref}
              id={props.keyName}
              size="small"
              fullWidth
              placeholder={props.placeholder}
              sx={props.cSX}
              error={
                props.keyObject?.length
                  ? getNestedValue(errors, props.keyObject)
                    ? true
                    : false
                  : errors[props.keyName]
                    ? true
                    : false
              }
            />
          )}
        />
        <p className="text-red-500 text-[10px] leading-2 h-4 min-w-1 mt-[2px]">
          {props.keyObject?.length
            ? getNestedValue(errors, props.keyObject)?.message
            : errors[props.keyName]
              ? errors[props.keyName]?.message
              : ''}
        </p>
      </div>
    </>
  )
}

export default React.memo(CInputControl)
