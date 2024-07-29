import React from 'react'

import { InputLabel } from '@mui/material'

type CLabelProps = {
  label: string
  keyName: string
  rules?: {
    [key: string]: any
  }
}

const CLabel: React.FC<CLabelProps> = props => {
  return (
    <>
      <div>
        <InputLabel className="mt-2" htmlFor={props.keyName}>
          {props.label}{' '}
          {props.rules?.required ? (
            <span className="text-red-500">*</span>
          ) : null}
        </InputLabel>
      </div>
    </>
  )
}

export default React.memo(CLabel)
