'use client'
import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import useDialogStore from '@/app/components/material-ui/dialog/useDialogStore'

type CDialogProps = {
  headerTitle?: string
  headerStyle?: string
  headerTitleStyle?: string
  children?: React.ReactNode
  cancelText?: string
  submitText?: string
  deleteText?: string
  cancelAction?: () => void
  submitAction?: () => void
  deleteAction?: () => void
}

const CDialog: React.FC<CDialogProps> = props => {
  const isRender = useDialogStore(state => state.isRender)
  const closeRender = useDialogStore(state => state.closeRender)

  const [isOpened, setIsOpened] = React.useState<number>(-1)

  React.useEffect(() => {
    let timeOut: any = null
    if (isRender) {
      timeOut = setTimeout(() => {
        setIsOpened(1)
      }, 200)
    }
    return () => clearTimeout(timeOut)
  }, [isRender])

  React.useEffect(() => {
    let timeOut: any = null
    if (!isOpened) {
      timeOut = setTimeout(() => {
        closeRender()
      }, 200)
    }
    return () => clearTimeout(timeOut)
  }, [isOpened])

  const handleClose = (event: object, reason: string) => {
    if (reason && reason === 'backdropClick') return
    setIsOpened(0)
  }

  const handleCancel = () => {
    setIsOpened(0)
    if (props.cancelAction) props.cancelAction()
  }

  const handleSubmit = () => {
    setIsOpened(0)
    if (props.submitAction) props.submitAction()
  }

  const handleDelete = () => {
    setIsOpened(0)
    if (props.deleteAction) props.deleteAction()
  }

  return (
    <>
      <Dialog
        open={isOpened === 1}
        onClose={handleClose}
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="form-dialog-title"
      >
        <CDialogHeader
          headerTitle={props.headerTitle}
          setIsOpened={setIsOpened}
          headerStyle={props.headerStyle}
          headerTitleStyle={props.headerTitleStyle}
        />
        <DialogContent>
          <div>{props.children}</div>
        </DialogContent>

        {props.submitText?.length &&
          props.deleteText?.length &&
          props.cancelText?.length && (
            <DialogActions>
              {props.cancelText && (
                <Button onClick={() => handleCancel()} color="primary">
                  {props.cancelText}
                </Button>
              )}
              {props.deleteText && (
                <Button
                  onClick={() => handleDelete()}
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                  {props.deleteText}
                </Button>
              )}
              {props.submitText && (
                <Button
                  onClick={() => handleSubmit()}
                  color="primary"
                  variant="contained"
                >
                  <SaveIcon />
                  {props.submitText}
                </Button>
              )}
            </DialogActions>
          )}
      </Dialog>
    </>
  )
}

type CDialogHeaderProps = {
  headerStyle?: string
  headerTitleStyle?: string
  headerTitle?: string
  setIsOpened: React.Dispatch<React.SetStateAction<number>>
}

const CDialogHeader: React.FC<CDialogHeaderProps> = React.memo(props => {
  console.log('Rendering CDialogHeader')
  return (
    <div className={`flex justify-between ${props.headerStyle} header-dialog`}>
      <DialogTitle className={`!py-4 ${props.headerTitleStyle}`}>
        {props.headerTitle}
      </DialogTitle>
      <CloseIcon
        onClick={() => props.setIsOpened(0)}
        className="mr-3 mt-3 cursor-pointer hover:bg-slate-100 !h-6 !w-6 rounded-full p-1"
      />
    </div>
  )
})

export default React.memo(CDialog)
