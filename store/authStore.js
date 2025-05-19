import { create } from 'zustand' // ✅ Correct way

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}))

export default useStore
