import { useState } from 'react'

export function useGastosForm() {
  const [gastos, setGastos] = useState({
    monto: "",
    fecha: "",
    categoria: "",
    descripcion: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = validateForm();
      console.log(gastos, result);
      const response = await fetch("/api/gastos", {
        method: "POST",
        body: JSON.stringify(gastos),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error al guardar los datos");
      }
      handleCloseModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setGastos({ ...gastos, [event.target.name]: event.target.value });
  };

  const handleCloseModal = () => {
    setGastos({});
    setErrors({});
    setOpenModal(undefined);
  };

  const validateForm = () => {
    const errors = {};
    if (gastos.monto === "" || gastos.monto === 0)
      errors.monto = "El monto es requerido";

    if (gastos.fecha === "") errors.fecha = "La fecha es requerida";

    if (gastos.categoria === "") errors.categoria = "La categoria es requerida";

    if (gastos.descripcion === "")
      errors.descripcion = "La descripcion es requerida";

    setErrors(errors);
    console.log(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    gastos,
    loading,
    errors,
    props,
    handleSubmit,
    handleChange,
    handleCloseModal,
  }
}
