import { configureStore } from '@reduxjs/toolkit'
// ...
import isAsideSlice from "./slicer/AsideCheck"
import opacitySlice from "./slicer/opacity"
import positSlice from "./slicer/posit"


export const store = configureStore({
  reducer: {
    isAs: isAsideSlice,
    opacity: opacitySlice,
    posit: positSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch