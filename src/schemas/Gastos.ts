import mongoose, { Schema, model, models } from 'mongoose';

const GastosSchema = new Schema({
    monto: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true

})

const Gasto = models.Gasto || model('Gasto', GastosSchema)
export default Gasto;