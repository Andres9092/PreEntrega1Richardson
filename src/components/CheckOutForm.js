import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {

  const [nombre, setnNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!nombre.trim()) {
      errors.nombre = "nombre is required";
    }

    if (!telefono.trim()) {
      errors.telefono = "telefono is required";
    }

    if (!email.trim() || !email.includes("@")) {
      errors.email = "Valid email is required";
    }

    return errors;
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        nombre,
        telefono,
        email,
      };

      onConfirm(userData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = (event) => {  //fucion que previene el envio de informacion del formulario. Setea todos los campos en vacio.
    event.preventDefault();

    setnNombre("");
    setTelefono("");
    setEmail("");
    setErrors({});
  };

  return (
    <form>
      <div classnombre="mb-6 mx-4">
        <label classnombre="ml-2 block mb-2 text-lg font-medium text-gray-900">Nombre</label>
        <input type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} required classnombre="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "/>
        {errors.nombre && (<p classnombre="text-red-500 text-sm mt-1">{errors.nombre}</p>)}
      </div>

      <div classnombre="mb-6 mx-4">
        <label classnombre="ml-2 block mb-2 text-lg font-medium text-gray-900">Telefono</label>
        <input type="tel" value={telefono} onChange={({ target }) => setTelefono(target.value)} required classnombre="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "/>
        {errors.telefono && (<p classnombre="text-red-500 text-sm mt-1">{errors.telefono}</p>)}
      </div>

      <div classnombre="mb-6 mx-4">
        <label classnombre="ml-2 block mb-2 text-lg font-medium text-gray-900">Email</label>
        <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} required classnombre="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "/>
        {errors.email && (<p classnombre="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button classnombre="ml-3 mb-6 mr-4 rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white" type="submit"
        onClick={handleConfirm}
      >Submit</button>
      
      <button classnombre="ml-3 mb-6 mr-4 rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        type="button" onClick={handleCancel} > Cancel </button>


    </form>
  );
};

export default CheckoutForm;