import { create } from 'zustand'

type DialogStore = {
  isRender: boolean
  openRender: () => void
  closeRender: () => void
}

const useDialogStore = create<DialogStore>((set) => ({
  isRender: false,
  openRender: () => set({ isRender: true }),
  closeRender: () => set({ isRender: false }),
}))

export default useDialogStore