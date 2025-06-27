import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Safe model registration (no overwrite)
export const Email = mongoose.models.Email || mongoose.model('Email', emailSchema);
