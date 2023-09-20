import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    chargePrice: { type: Number },
    role: { type: String },

    // Additional information required after successful sign up
    specialization: { type: String },
    qualification: { type: Array },
    level_of_experience: { type: Array },
    bio: { type: String, maxLength: 100 },
    about: { type: String },
    timeAvailable: { type: Array },
    
    // information collected based on performance
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 },

    // status
    isApproved: {
        type: String,
        enum: [ "pending", "approved", "cancelled" ],
        default: "pending",
    },

    // appointments
    appointments: [{ type: mongoose.Types.ObjectId, ref: Appointments }],
});

export default mongoose.model("Doctor", doctorSchema);