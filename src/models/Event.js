import mongoose from 'mongoose';

export const Event = mongoose.model('Event', {
    type: {
        type: String,
        required: true,
        enum: ['error', 'warning', 'debug', 'info']
    },
    component: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    stacktrace: {
        type: String
    },
    ray: {
        type: String
    },
    datetime: {
        type: Date,
        required: true
    },
    custom: {
        type: {}
    }
});
