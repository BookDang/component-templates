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
import LoadingButton from '@mui/lab/LoadingButton'
import useDialogStore from '@/app/components/material-uis/dialog/useDialogStore'

type CDialogProps = {
  headerTitle?: string
  headerStyle?: string
  headerTitleStyle?: string
  children?: React.ReactNode
  otherLabel?: string | React.ReactNode | undefined
  submitLabel?: string | React.ReactNode | undefined
  deleteLabel?: string | React.ReactNode | undefined
  isSubmitting?: boolean
  otherAction?: () => void
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

  const handleOther = () => {
    if (props.otherAction) props.otherAction()
  }

  const handleSubmit = () => {
    if (props.submitAction) props.submitAction()
  }

  const handleDelete = () => {
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

        {props.submitLabel && props.deleteLabel && props.otherLabel && (
          <DialogActions
            sx={{
              padding: '16px 24px',
            }}
          >
            {props.otherLabel && (
              <Button onClick={() => handleOther()} color="primary">
                {props.otherLabel}
              </Button>
            )}
            {props.deleteLabel && (
              <Button
                onClick={() => handleDelete()}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
                {props.deleteLabel}
              </Button>
            )}
            {props.submitLabel &&
              (!!props.isSubmitting ? (
                <LoadingButton
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="outlined"
                >
                  {props.submitLabel}
                </LoadingButton>
              ) : (
                <Button
                  onClick={() => handleSubmit()}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  <SaveIcon />
                  {props.submitLabel}
                </Button>
              ))}
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
