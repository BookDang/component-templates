'use client'

import CDialog from '@/app/components/material-uis/dialog/CDialog'
import useDialogStore from '@/app/components/material-uis/dialog/useDialogStore'

const DemoDialog = () => {
  const openRender = useDialogStore(state => state.openRender)
  const isRender = useDialogStore(state => state.isRender)
  return (
    <>
      <button onClick={openRender}>Open Dialog</button>
      {isRender && (
        <CDialog
          headerTitle="Demo Dialog"
          cancelText="Cancel"
          submitText="Submit"
          deleteText="Delete"
          cancelAction={() => console.log('Cancel')}
          submitAction={() => console.log('Submit')}
          deleteAction={() => console.log('Delete')}
        >
          {/* text for test */}
          <p>Dialog Content</p>
        </CDialog>
      )}
    </>
  )
}

export default DemoDialog
