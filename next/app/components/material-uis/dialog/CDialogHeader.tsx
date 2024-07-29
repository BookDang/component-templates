import React from "react"
import { DialogTitle } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

type CDialogHeaderProps = {
  headerStyle?: string
  headerTitleStyle?: string
  headerTitle?: string
  setIsOpened: React.Dispatch<React.SetStateAction<number>>
}

const CDialogHeader: React.FC<CDialogHeaderProps> = props => {
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
}

export default React.memo(CDialogHeader)