import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likes: { [productId: number]: boolean };
}

const initialState: LikeState = {
    likes: {},
}

export const likerSlice = createSlice({
  name: 'liker',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.likes[productId] = !state.likes[productId];
      localStorage.setItem("like", JSON.stringify(state.likes));
    },
    setLikes: (state, action: PayloadAction<{ [productId: number]: boolean }>) => {
      state.likes = action.payload;
    },
  },
});

export const { toggleLike, setLikes } = likerSlice.actions;

export default likerSlice.reducer;