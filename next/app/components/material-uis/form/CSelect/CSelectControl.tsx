import CSelect from '@/app/components/material-uis/form/CSelect/CSelect'
import CLabel from '@/app/components/material-uis/form/CLabel'
import { CControlType } from '@/app/components/material-uis/form/form-types'

type CSelectControlProps = CControlType & {
  SelectType?: 'text' | 'number' | 'email' | 'password' | 'tel'
  label: string
  options: string[]
}

const CSelectControl: React.FC<CSelectControlProps> = props => {
  return (
    <>
      <CLabel label={props.label} keyName={props.keyName} rules={props.rules} />
      <CSelect
        keyName={props.keyName}
        placeholder={props.placeholder}
        rules={props.rules}
        cSX={props.cSX}
        onChange={props.onChange}
        onBlur={props.onBlur}
        options={props.options}
      />
    </>
  )
}

export default CSelectControl
