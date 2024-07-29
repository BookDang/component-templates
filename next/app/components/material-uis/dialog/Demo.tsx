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
          otherLabel="Cancel"
          submitLabel="Submit"
          deleteLabel="Delete"
          otherAction={() => console.log('Cancel')}
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
