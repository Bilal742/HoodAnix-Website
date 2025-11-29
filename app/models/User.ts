import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { type: String, default: "credentials" }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
