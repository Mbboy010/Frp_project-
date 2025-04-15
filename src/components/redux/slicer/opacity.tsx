import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface opacityState {
  value: string 
}

const initialState: opacityState = {
  value: "0",
}

export const opacitySlice = createSlice({
  name: 'opacity',
  initialState,
  reducers: {
      setOpacity: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOpacity } = opacitySlice.actions

export default opacitySlice.reducer