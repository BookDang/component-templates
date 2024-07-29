import CInput from '@/app/components/material-uis/form/CInput/CInput'
import CLabel from '@/app/components/material-uis/form/CLabel'
import { CControlType } from '@/app/components/material-uis/form/form-types'

type CInputControlProps = CControlType & {
  inputType?: 'text' | 'number' | 'email' | 'password' | 'tel'
  label: string
}

const CInputControl: React.FC<CInputControlProps> = props => {
  return (
    <>
      <CLabel label={props.label} keyName={props.keyName} rules={props.rules} />
      <CInput
        inputType={props.inputType}
        keyName={props.keyName}
        placeholder={props.placeholder}
        rules={props.rules}
        cSX={props.cSX}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  )
}

export default CInputControl
