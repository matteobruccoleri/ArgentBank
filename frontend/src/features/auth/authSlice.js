import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

// 🔐 Connexion de l'utilisateur
export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.body.token;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Échec de la connexion'
    );
  }
});

// 👤 Récupération du profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Impossible de charger le profil'
      );
    }
  }
);

// 🔧 État initial
const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

// 🧠 Slice principal
const authSlice = createSlice({
  name: 'auth',
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
        state.token = null;
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
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;