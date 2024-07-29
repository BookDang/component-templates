export type CControlType = {
  cSX?: {}
  keyName: string
  placeholder?: string
  rules?: {
    [key: string]: any
  }
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => void
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
}

export const INPUTTEXT = 'text'
export const INPUTSELECT = 'select'
export const INPUTRADIO = 'radio'
export const INPUTCHECKBOX = 'checkbox'
export const INPUTTEXTAREA = 'textarea'
export const INPUTDATE = 'date'
export const INPUTTIME = 'time'
export const INPUTNUMBER = 'number'
export const INPUTEMAIL = 'email'
export const INPUTPASSWORD = 'password'
export const INPUTTEL = 'tel'

export const CIUNPUTTYPEs: string[] = [
  INPUTTEXT,
  INPUTSELECT,
  INPUTRADIO,
  INPUTCHECKBOX,
  INPUTTEXTAREA,
  INPUTDATE,
  INPUTTIME,
  INPUTNUMBER,
  INPUTEMAIL,
  INPUTPASSWORD,
  INPUTTEL,
] as const

export type CInputTypes = (typeof CIUNPUTTYPEs)[number]
