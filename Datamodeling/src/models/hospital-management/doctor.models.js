import mongoose from "mongoose";

const hospitalHours = new mongoose.Schema({
    hospitalName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    schedule: [{
        day: {
            type: String, // e.g., "Monday"
            required: true
        },
        startTime: {
            type: String, // "09:00 AM"
            required: true
        },
        endTime: {
            type: String, // "05:00 PM"
            required: true
        }
    }]
});

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true
    },
    qualifications: {
        type: String, 
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [hospitalHours]
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);
