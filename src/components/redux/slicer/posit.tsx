import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface positState {
  value: string 
}

const initialState: positState = {
  value: "-79vw",
}

export const positSlice = createSlice({
  name: 'posit',
  initialState,
  reducers: {
      setPosit: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosit } = positSlice.actions

export default positSlice.reducer