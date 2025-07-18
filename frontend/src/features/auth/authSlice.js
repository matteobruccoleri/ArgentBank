import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

// 🔐 Connexion
export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    return await userService.login(email, password);
  } catch {
    return thunkAPI.rejectWithValue("Échec de la connexion");
  }
});

// 👤 Récupération profil
export const fetchUserProfile = createAsyncThunk("auth/fetchUserProfile", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    return await userService.getUser(state.auth.token);
  } catch {
    return thunkAPI.rejectWithValue("Impossible de charger le profil");
  }
});

// ✏️ Mise à jour profil
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ firstName, lastName }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      return await userService.updateUser(state.auth.token, firstName, lastName);
    } catch {
      return thunkAPI.rejectWithValue("Erreur lors de la mise à jour");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔄 login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👤 fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✏️ updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // ✅ On remplace directement l'utilisateur
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;