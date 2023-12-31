import mongoose from 'mongoose';

// Define the Countdown schema
const countdownSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    backgroundImage: {
        type: String, // Assuming a URL or file path for simplicity
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Countdown model
const Countdown = mongoose.model('Countdown', countdownSchema);

// Export the Countdown model
export default Countdown;