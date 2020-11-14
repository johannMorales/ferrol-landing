import FondoProductos from "../../fondos/fondo-productos";
import Container from "../../general/container";
import Viewport from "../../general/viewport";

export default function ProductoPage({ children }) {
  return (
    <Container>
      <FondoProductos>
        <Viewport>
          <h1 className="text-center uppercase text-2xl sm:text-4xl font-semibold text-white my-4 sm:my-8" >
            Nuestros productos
          </h1>
          {children}
        </Viewport>
      </FondoProductos>
    </Container>
  );
}
