import { NextRequest, NextResponse } from "next/server";
import Gastos from "../../../schemas/Gastos";
import { connect } from '../../../lib/adapters/mongoose-db'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(request: NextRequest) {
    try {
        await connect()
        const session = await getServerSession(authOptions)
        console.log(session)
        const gastos = await Gastos.find({ usuario: session.user.id })
        return NextResponse.json({ success: true, data: gastos }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        await connect()
        const session = await getServerSession(authOptions)
        const { monto, fecha, categoria, descripcion } = await request.json()
        const gasto = await Gastos.create({ monto, fecha, categoria, descripcion, usuario: session.user.id })
        return NextResponse.json({ success: true, data: gasto }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}
