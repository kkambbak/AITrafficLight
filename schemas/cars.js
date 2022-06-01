const mongoose = require('mongoose');

const {Schema} = mongoose;
const carsSchema = new Schema ({
    
    CAR: {
        type: Number,
        required: true,
    },
    MOTORBIKE: {
        type: Number,
        required: true,
    },
    BUS: {
        type: Number,
        required: true,
    },
    TRUCK: {
        type: Number,
        required: true,
    },
    PERSON: {
        type: Number,
        required: true,
    },

});

module.exports = mongoose.model('Car',carsSchema);