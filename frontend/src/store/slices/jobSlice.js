import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await api.get('/jobs');
    return response.data;
});

export const addJob = createAsyncThunk('jobs/addJob', async (job) => {
    const response = await api.post('/jobs', job);
    return response.data;
});

export const updateJob = createAsyncThunk('jobs/updateJob', async (job) => {
    const response = await api.put(`/jobs/${job.id}`, job);
    return response.data;
});

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (jobId) => {
    await api.delete(`/jobs/${jobId}`);
    return jobId;
});

const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addJob.fulfilled, (state, action) => {
                state.jobs.push(action.payload);
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                const index = state.jobs.findIndex(job => job.id === action.payload.id);
                state.jobs[index] = action.payload;
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter(job => job.id !== action.payload);
            });
    }
});

export default jobSlice.reducer;
