import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AsideState {
  value: boolean
}

const initialState: AsideState = {
  value: false,
}

export const isAsideSlice = createSlice({
  name: 'isAs',
  initialState,
  reducers: {
      setIsAside: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsAside } = isAsideSlice.actions

export default isAsideSlice.reducer