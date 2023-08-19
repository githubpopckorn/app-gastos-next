'use client'
import { Card } from "flowbite-react";

export function GastosList({ gastos }) {
  console.log(gastos)
  return (
    <section>
      <ul className="grid grid-cols-3 gap-2">
        {gastos.map((gasto) => (
          <Card key={gasto._id}>
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-lg">{gasto.monto}</span>
              <span className="font-semibold text-lg">{gasto.fecha}</span>
              <span className="font-semibold text-lg">{gasto.categoria}</span>
              <span className="font-semibold text-lg">{gasto.descripcion}</span>
            </div>
          </Card>
        ))}
      </ul>
    </section>
  );
}
