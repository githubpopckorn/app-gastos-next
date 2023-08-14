import { NextRequest, NextResponse } from "next/server";
import Gastos from "../../../../schemas/Gastos";
import { connect } from '../../../../lib/adapters/mongoose-db'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connect()
        const id = params.id

        const { monto, fecha, categoria, descripcion, usuario } = await request.json()
        const gasto = await Gastos.findByIdAndUpdate(id, { monto, fecha, categoria, descripcion, usuario }, { new: true })
        return NextResponse.json({ success: true, data: gasto }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}

export async function DELETE({ params }: { params: { id: string } }) {
    try {
        await connect()
        const id = params.id
        const gasto = await Gastos.findByIdAndDelete(id)
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}