"use client";
import { Button, Label, Modal, TextInput, Select } from "flowbite-react";
import { useGastosForm } from "../../hooks/useGastosForm";

export function GastosForm() {
  const {
    gastos,
    handleChange,
    errors,
    props,
    handleSubmit,
    handleCloseModal,
    loading,
  } = useGastosForm();
  
  return (
    <>
      <Button
        onClick={() => props.setOpenModal("default")}
        className="bg-blue-500"
      >
        Registrar Ingresos y Gastos
      </Button>

      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Formulario de gastos e ingresos</Modal.Header>
        <Modal.Body>
          <form className="w-full">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* Monto */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="monto" value="Monto" />
                </div>
                <TextInput
                  id="monto"
                  name="monto"
                  required
                  type="number"
                  value={gastos.monto}
                  onChange={handleChange}
                  helperText={"monto" in errors ? errors.monto : ""}
                  {...("monto" in errors && { color: "failure" })}
                />
              </div>
              {/* End Monto */}

              {/* Fecha */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fecha" value="Fecha" />
                </div>
                <TextInput
                  type="date"
                  name="fecha"
                  id="fecha"
                  value={gastos.fecha}
                  onChange={handleChange}
                  helperText={"fecha" in errors ? errors.fecha : ""}
                  {...("fecha" in errors && { color: "failure" })}
                />
              </div>
              {/* End Fecha */}

              {/* Categoría */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoria" value="Categoría" />
                </div>
                <Select
                  name="categoria"
                  id="categoria"
                  placeholder="Seleccione una categoría"
                  required
                  value={gastos.categoria}
                  onChange={handleChange}
                  helperText={"categoria" in errors ? errors.categoria : ""}
                  {...("categoria" in errors && { color: "failure" })}
                >
                  <option value=""></option>
                  <option value="Comida">Comida</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Entretenimiento">Entretenimiento</option>
                  <option value="Otros">Otros</option>
                </Select>
              </div>

              {/* End Categoria */}

              {/* Descripcion */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="descripcion" value="Descripción" />
                </div>
                <TextInput
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  value={gastos.descripcion}
                  onChange={handleChange}
                  helperText={"descripcion" in errors ? errors.descripcion : ""}
                  {...("descripcion" in errors && { color: "failure" })}
                />
              </div>
              {/* End Descripcion */}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} isProcessing={loading}>
            Registrar
          </Button>
          <Button color="gray" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
