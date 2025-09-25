import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhone, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/Button";

const OficinaSection = () => {
  const office = {
    city: "IZÚCAR DE MATAMOROS",
    address: "Reforma 20, Centro, 74400 Izúcar de Matamoros, Puebla.",
    phone: "243 1067799",
  };

  return (
    <section id="contacto" className="py-12 bg-white text-gray-700 text-center">
      
      {/* Sección de contacto */}
      <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold text-center mb-4" data-aos="fade-up">CONTACTO</h2>
        <p className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-8" data-aos="fade-up" data-aos-delay="200">
            Estamos aquí para ayudarte. Contáctanos a través de cualquier medio.
        </p>

        {/* Contactos y Redes en Tarjetas */}
         <div className="flex flex-wrap justify-center gap-2">
            {[
               // { icon: <FaWhatsapp className="text-green-500 text-3xl" />, text: "+52 123 456 7890" },
               { 
                  icon: <MdEmail className="text-indigo-900 text-2xl" />, 
                  text: "corporativoagyasociados@gmail.com", 
                  link: "mailto:corporativoagyasociados@gmail.com"
               },
               // { 
               //    icon: <FaLinkedin className="text-indigo-900 text-2xl" />, 
               //    text: "linkedin.com/empresa",
               //    link: "https://www.linkedin.com/company/empresa"
               // },
               // { icon: <FaLocationDot className="text-red-700 text-2xl"/>, text: "Reforma 20, Centro, 74400 Izúcar de Matamoros, Pue." },
               { 
                  icon: <FaFacebookSquare className="text-indigo-900 text-2xl" />, 
                  text: "Alvarado Guzmán y Asociados",
                  link: "https://www.facebook.com/agcorpjuridico"
               },
               { 
                  icon: <FaInstagramSquare className="text-indigo-900 text-2xl" />, 
                  text: "corporativoalavaradoguzman",
                  link: "https://www.instagram.com/corporativoalvaradoguzman/"
               },
               { 
                  icon: <FaTiktok className="text-indigo-900 text-2xl" />, 
                  text: "alfonsoalvaradogu",
                  link: "https://www.tiktok.com/@juridicoagasociados?_t=ZS-8xZ3ley46Gm&_r=1"
               },
               { 
                  icon: <FaYoutube className="text-indigo-900 text-2xl" />, 
                  text: "CorporativoJurídicoAG",
                  link: "https://youtube.com/@corporativojuridicoag?si=Avb5OhjjHKlWIkBw"
               },
            ].map((item, index) => (
               <div
                  key={index}
                  className="bg-gray-50 p-4 shadow-md flex items-center gap-3 transition-transform transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
               >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                     <span className="text-2xl">{item.icon}</span>
                     <p className="text-1xl text-gray-500 ml-2 transition-colors duration-300 hover:text-blue-900">{item.text}</p>
                  </a>
               </div>
         ))}
            {/* Botón de WhatsApp con Animación */}
            <div className="text-center mt-2">
               <Button
                  className="button-whatsapp bg-gray-200 text-indigo-900 hover:bg-gray-300 shadow-lg font-bold py-3 px-6 flex items-center justify-center space-x-2 transition-transform transform hover:scale-110"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  onClick={() => window.open("https://wa.me/5212213451169", "_blank")}
               >
               <FaWhatsapp className="text-xl" /> 
                  <span>Enviar mensaje</span>
               </Button>
            </div>
         </div>


         <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold text-center mt-20 mb-4" data-aos="fade-up">OFICINAS</h2>

         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* <div className="bg-gray-50 p-6 space-y-4 text-lg text-blue-900 tracking-wide" data-aos="fade-up">
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
               
            </div> */}

            {/* Oficina 1 */}
            <div className="bg-gray-50 p-6  space-y-4" data-aos="fade-up">
               <h3 className="text-xl font-semibold">IZÚCAR DE MATAMOROS</h3>
               <p className="text-sm">Reforma 20, Centro, 74400 Izúcar de Matamoros, Puebla.</p>
               <p className="text-sm flex items-center gap-2">
                  <a href="tel:2211963902" className="flex items-center gap-2 text-indigo-900 hover:underline">
                     <FaPhone className="text-indigo-900" />
                        221 196 3902
                  </a>
               </p>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7562.87008631319!2d-98.46860261348235!3d18.599492248563404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf0013e0809395%3A0x9552f1f71bb61350!2sReforma%2020%2C%20Centro%2C%2074400%20Iz%C3%BAcar%20de%20Matamoros%2C%20Pue.!5e0!3m2!1ses!2smx!4v1739553596247!5m2!1ses!2smx"
                  width="100%"
                  height="250"
                  className="shadow-lg"
                  allowFullScreen=""
                  loading="lazy"
               ></iframe>
            </div>

            {/* Oficina 2 */}
            <div className="bg-gray-50 p-6 space-y-4" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-xl font-semibold">CIUDAD DE PUEBLA</h3>
               <p className="text-sm">Plaza Sinfonía, 2da Planta, Local 4 Distrito Sonata, Lomas de Angelópolis, II, Puebla.</p>
               <p className="text-sm flex items-center gap-2">
                  <a href="tel:2211963902" className="flex items-center gap-2 text-indigo-900 hover:underline">
                     <FaPhone className="text-indigo-900" />
                        221 196 3902
                  </a>
               </p>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5979591741393!2d-98.27809169999999!3d18.993354999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb984aef466ab%3A0xb57e1d0055258469!2sSonata%20CoWork!5e0!3m2!1ses!2smx!4v1756757224269!5m2!1ses!2smx"
                  width="100%"
                  height="250"
                  className="shadow-lg"
                  allowFullScreen=""
                  loading="lazy"
               ></iframe>
            </div>
         </div>

      </section>
   );
};

export default OficinaSection;
