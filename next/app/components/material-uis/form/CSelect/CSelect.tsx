'use client'
import { MenuItem, TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CControlType } from '@/app/components/material-uis/form/form-types'

type CSelectProps = CControlType & {
  options: string[]
}

const CSelect: React.FC<CSelectProps> = props => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <div className="w-full">
        <Controller
          control={control}
          name={props.keyName}
          rules={props.rules}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              select
              label=""
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
              error={errors[props.keyName] ? true : false}
            >
              {props.options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <p className="text-red-500 text-[10px] leading-2 h-2 min-w-1 mt-[2px]">
          {errors[props.keyName]?.message as string}{' '}
        </p>
      </div>
    </>
  )
}

export default CSelect
