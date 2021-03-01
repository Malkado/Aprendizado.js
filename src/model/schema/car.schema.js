const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
        manufacturer: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        license_plate: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Car', carSchema);