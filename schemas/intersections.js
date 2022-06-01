const mongoose = require('mongoose');

const {Schema} = mongoose;
const intersectionsSchema = new Schema ({
    CRSRD_ID: {
        type: Number,
        required: true,
        unique: true,
    },
    CRSRD_NM: {
        type: String,
        required: true,
        unique: true,
    },
    CRSRD_TYPE_CD: Number,
    LNG_CRDNT: {
        type: Number,
        required: true,
    },
    LAT_CRDNT: {
        type: Number,
        required: true,
    },
    dir1: String,
    dir2: String,

});

module.exports = mongoose.model('Intersection',intersectionsSchema);