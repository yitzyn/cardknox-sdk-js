import Schema from 'validate';

const requestSchema = new Schema({
    xKey: {
        type: String,
        required: true
    },
    xSoftwareName: {
        type: String,
        required: true
    },
    xSoftwareVersion: {
        type: String,
        required: true
    },
    xCommand: {
        type: String,
        enum: ['cc:sale','cc:authonly']
    },
    xAmount: {
        type: Number,
        required: true,
        size: { min: 0.01 }
    },
    xDeviceType: {
        type: String,
        required: true
    },
    xSerialNumber: {
        type: String,
        required: true
    }
}, { typecast: true });

export default requestSchema;