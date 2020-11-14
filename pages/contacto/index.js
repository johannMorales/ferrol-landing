import TextArea from "../../components/form/textarea";
import TextInput from "../../components/form/textinput";
import Container from "../../components/general/container/container.component";
import Viewport from "../../components/general/viewport";

function ContactInfo() {
  return (
    <div>
      <img alt="logo-azul" src="/img/_logos/logo-azul.png" className="h-16" />
      <address className="text-normal not-italic">
        <ul className="list-none text-primary">
          <li className="leading-tight my-4 flex items-center">
            <img
              className="h-5 inline-block mr-2"
              alt="location"
              src="/img/contacto/location.png"
            />
            Jr. Villavicencio 250 Chimbote, Ancash, Perú
          </li>
          <li className="leading-tight my-4 flex items-center">
            <img
              className="h-5 inline-block mr-2"
              alt="location"
              src="/img/contacto/phone.png"
            />
            (043) 320994 / 994 057 240 / 998325505
          </li>
          <li className="leading-tight my-4 flex items-center">
            <img
              className="h-5 inline-block mr-2"
              alt="location"
              src="/img/contacto/mail.png"
            />
            ventas.empresas@ferrol.pe
          </li>
        </ul>
      </address>
      <div className="text-primary flex items-center leading-tight">
        <img
          className="h-8 inline-block mr-3"
          alt="location"
          src="/img/contacto/heart.png"
        />
        Consume sal marina moderadamente para una vida saludable
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div>
      <div className="text-2xl sm:text-2xl md:text-2xl font-semibold text-primary text-center leading-none mx-0 my-4 sm:my-6">
        ¿Quieres ser distribuidor autorizado en tu ciudad?
      </div>
      <div className="flex flex-col border border-primary px-3 py-4 pb-6 gap-4 sm:py-6 sm:pb-6 sm:gap-6">
        <div className="text-xl text-center text-primary font-regular leading-none">
          Completa el formulario y te contactaremos.
        </div>
        <div className="flex flex-col gap-4 border-primary">
          <TextInput label="Empresa:" />
          <TextInput label="R.U.C. o D.N.I.:" />
          <TextInput label="Nombres y Apellidos:" />
          <TextInput label="Email:" />
          <TextInput label="Teléfono o celular:" />
          <TextInput label="Ciudad:" />
          <TextArea label="Coméntanos sobre tu distribuidora:" />
        </div>
      </div>
      <div className="py-2 text-primary text-regular">
        Todos los campos deben ser llenados.
      </div>
    </div>
  );
}
export default function ContactoPage() {
  return (
    <Container>
      <Viewport>
        <div className="flex items-center flex-wrap">
          <div className="flex-grow flex justify-center my-8">
            <ContactInfo />
          </div>
          <div className="flex-grow flex justify-center my-8">
            <ContactForm />
          </div>
        </div>
      </Viewport>
      <footer className="border border-b-0 border-r-0 border-l-0 border-primary py-6 text-primary text-sm text-center mt-6 leading-none">
        Copyright © Ferrol. Todos los derechos reservados.
      </footer>
    </Container>
  );
}
