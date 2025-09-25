// import { useEffect, useState, Fragment } from "react";
// import axios from "axios";
// import { Button } from "./ui/Button";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";
// import { TiArrowSortedDown } from "react-icons/ti";

// const ContactFormSection = () => {
//   const [servicios, setServicios] = useState([]);
//   const [selectedServicio, setSelectedServicio] = useState(null);

//   // Campos
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   // Errores
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get(`/api/services`);
//       setServicios(response.data);
//     } catch (err) {
//       console.error("Failed to fetch services");
//     }
//   };

//   // Validaciones
//   const validate = () => {
//     let newErrors = {};

//     if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.name)) {
//       newErrors.name = "El nombre solo debe contener letras y espacios.";
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Ingresa un correo electrónico válido.";
//     }

//     if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
//       newErrors.phone = "El teléfono debe contener 10 dígitos numéricos.";
//     }

//     if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.country)) {
//       newErrors.country = "El país solo debe contener letras y espacios.";
//     }

//     if (!selectedServicio) {
//       newErrors.service = "Por favor selecciona un servicio.";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "El mensaje no puede estar vacío.";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // Manejo del submit
//   const handleSubmit = (e) => {
//     if (!validate()) {
//       e.preventDefault(); // Detiene el envío si hay errores
//     }
//   };

//   return (
//     <section id="contacto" className="py-12 bg-white text-gray-700 text-center">
//       <h2 className="text-2xl lg:text-3xl font-bold text-gray-950 text-center mb-4">
//         ESCRÍBENOS
//       </h2>
//       <p className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-8">
//         Estamos aquí para ayudarte. Contáctanos a través de este formulario
//         donde puedes describir tu situación y posteriormente alguien de nuestro
//         equipo se comunicará contigo.
//       </p>

//       {/* Formulario con Formspree usando action */}
//       <form
//         action="https://formspree.io/f/myzdbaey"
//         method="POST"
//         onSubmit={handleSubmit}
//         className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left p-4"
//       >
//         {/* Nombre */}
//         <div className="md:col-span-2">
//           <input
//             type="text"
//             name="name"
//             placeholder="Nombre"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             className="w-full border border-blue-800 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-900"
//             required
//           />
//           {errors.name && (
//             <p className="text-red-600 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div className="md:col-span-1">
//           <input
//             type="email"
//             name="email"
//             placeholder="Correo electrónico"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="w-full border border-blue-800 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-900"
//             required
//           />
//           {errors.email && (
//             <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Teléfono */}
//         <div className="md:col-span-1">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Teléfono"
//             value={formData.phone}
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//             className="w-full border border-blue-800 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-900"
//           />
//           {errors.phone && (
//             <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
//           )}
//         </div>

//         {/* Selector con Headless UI */}
//         <div className="relative">
//           <Listbox value={selectedServicio} onChange={setSelectedServicio}>
//             <div className="relative">
//               <Listbox.Button className="w-full border border-blue-800 bg-white rounded-sm p-3 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-indigo-900">
//                 <span
//                   className={selectedServicio ? "text-gray-800" : "text-gray-400"}
//                 >
//                   {selectedServicio
//                     ? selectedServicio.name
//                     : "Selecciona un servicio"}
//                 </span>
//                 <TiArrowSortedDown className="h-5 w-5 text-gray-500" />
//               </Listbox.Button>

//               <Transition
//                 as={Fragment}
//                 leave="transition ease-in duration-100"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <Listbox.Options className="absolute mt-1 w-full bg-white shadow-sm rounded-lg border border-gray-200 max-h-60 overflow-auto z-10">
//                   {servicios.map((servicio) => (
//                     <Listbox.Option
//                       key={servicio.id}
//                       value={servicio}
//                       className={({ active }) =>
//                         `cursor-pointer select-none relative p-3 ${
//                           active ? "bg-indigo-100 text-indigo-900" : "text-gray-700"
//                         }`
//                       }
//                     >
//                       {({ selected }) => (
//                         <>
//                           <span
//                             className={`block truncate ${
//                               selected ? "font-medium" : "font-normal"
//                             }`}
//                           >
//                             {servicio.name}
//                           </span>
//                           {selected ? (
//                             <span className="absolute inset-y-0 right-3 flex items-center text-indigo-600">
//                               <CheckIcon className="h-5 w-5" />
//                             </span>
//                           ) : null}
//                         </>
//                       )}
//                     </Listbox.Option>
//                   ))}
//                 </Listbox.Options>
//               </Transition>
//             </div>
//           </Listbox>

//           {/* Campo oculto para enviar a Formspree */}
//           <input
//             type="hidden"
//             name="service"
//             value={selectedServicio?.name || ""}
//           />

//           {errors.service && (
//             <p className="text-red-600 text-sm mt-1">{errors.service}</p>
//           )}
//         </div>

//         {/* Pais en el que reside */}
//         <div className="md:col-span-1">
//           <input
//             type="text"
//             name="country"
//             placeholder="País en el que reside"
//             value={formData.country}
//             onChange={(e) =>
//               setFormData({ ...formData, country: e.target.value })
//             }
//             className="w-full border border-blue-800 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-900"
//           />
//           {errors.country && (
//             <p className="text-red-600 text-sm mt-1">{errors.country}</p>
//           )}
//         </div>

//         {/* Mensaje */}
//         <div className="md:col-span-2">
//           <textarea
//             name="message"
//             placeholder="Escribe tu mensaje"
//             rows="5"
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             className="w-full border border-blue-800 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-900"
//             required
//           ></textarea>
//           {errors.message && (
//             <p className="text-red-600 text-sm mt-1">{errors.message}</p>
//           )}
//         </div>

//         {/* Botón */}
//         <div className="md:col-span-2 flex justify-center">
//           <Button
//             type="submit"
//             className="px-8 py-3 text-white bg-blue-950 rounded-sm hover:bg-blue-900 transition"
//           >
//             Enviar mensaje
//           </Button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ContactFormSection;






import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Button } from "./ui/Button";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaLock } from "react-icons/fa";

const ContactFormSection = () => {
  const [servicios, setServicios] = useState([]);
  const [selectedServicio, setSelectedServicio] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`/api/services`);
      setServicios(response.data);
    } catch (err) {
      console.error("Failed to fetch services");
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.name)) {
      newErrors.name = "El nombre solo debe contener letras y espacios.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener 10 dígitos numéricos.";
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.country)) {
      newErrors.country = "El país solo debe contener letras y espacios.";
    }
    if (!selectedServicio) {
      newErrors.service = "Por favor selecciona un servicio.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-[980px] bg-white/10 backdrop-blur-xl rounded-1xl shadow-lg overflow-hidden">
        
        {/* Columna izquierda: Formulario */}
        <div className="flex-1 p-10 text-blue-900">
          <h2 className="text-2xl font-bold mb-2 text-center justify-center">ESCRÍBENOS</h2>
          <p className="text-sm text-gray-600 mb-8 text-center justify-center">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.
          </p>

          <form
            action="https://formspree.io/f/myzdbaey"
            method="POST"
            onSubmit={handleSubmit}
            // className="space-y-4"
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left p-2"
          >
            <div className="md:col-span-2">
               {/* Nombre */}
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 rounded-md bg-white text-gray-800 text-sm border border-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            </div>
           
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 rounded-md bg-white text-gray-800 text-sm border border-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            {/* Teléfono */}
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 rounded-md bg-white text-gray-800 text-sm border border-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

            {/* Servicio */}
            <div className="relative">
              <Listbox value={selectedServicio} onChange={setSelectedServicio}>
                <div className="relative">
                  <Listbox.Button className="w-full p-2 rounded-md bg-white text-gray-700 text-sm border border-blue-900 flex justify-between items-center">
                    <span>
                      {selectedServicio ? selectedServicio.name : "Selecciona un servicio"}
                    </span>
                    <TiArrowSortedDown className="h-5 w-5 text-gray-600" />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 w-full bg-white text-sm rounded-lg shadow-md max-h-60 overflow-auto z-10">
                      {servicios.map((servicio) => (
                        <Listbox.Option
                          key={servicio.id}
                          value={servicio}
                          className={({ active }) =>
                            `cursor-pointer select-none relative p-2 ${
                              active ? "bg-blue-100 text-blue-900" : "text-gray-800"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={selected ? "font-semibold" : "font-normal"}>
                                {servicio.name}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 right-3 flex items-center text-blue-600 text-sm">
                                  <CheckIcon className="h-5 w-5" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <input type="hidden" name="service" value={selectedServicio?.name || ""} />
              {errors.service && <p className="text-red-400 text-sm">{errors.service}</p>}
            </div>

            {/* País */}
            <input
              type="text"
              name="country"
              placeholder="País en el que reside"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full p-2 rounded-md bg-white text-gray-800 text-sm border border-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.country && <p className="text-red-400 text-sm">{errors.country}</p>}
            
            <div className="md:col-span-2">
              {/* Mensaje */}
              <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-md bg-white text-gray-800 text-sm border border-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>
            
            {/* Botón */}
            <div className="md:col-span-2 flex justify-center">
              <Button
                type="submit"
                className="px-8 py-2 rounded-md bg-blue-950 text-white font-bold hover:bg-blue-800 transition"
              >
                Enviar
              </Button>
            </div>
            
          </form>
        </div>

        {/* Columna derecha: Seguridad */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white text-center p-10">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-6">
            <span className="font-bold">Safe</span> security is on
          </h3>
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 shadow-inner mb-6">
            <FaLock className="text-blue-600 text-4xl" />
          </div>
          <p className="text-xs text-gray-500">
            By signing up to our services, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>.
          </p> */}
          <div className="bg-gray-50 p-6 space-y-4 text-md text-blue-900 tracking-wide" data-aos="fade-up">
               <p >
                  <strong>Horarios de atención: </strong> lunes a viernes de 09:00 a 16:00 horas.
               </p>

                <p >
                  Brindamos asesorías jurídicas de manera presencial, telefónica y virtual mediante Google Meet, con atención previa cita para su mayor comodidad. 
               </p>

               <p >
                  Nuestro compromiso es proporcionar soluciones legales integrales, adaptadas a las necesidades específicas de cada cliente, asegurando atención 
                  personalizada y eficaz en todo momento.
               </p>
               
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
