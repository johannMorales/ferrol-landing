import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="Refinada fina"
          description="Sal marina secada a más de 110 grados centígrados, de granulometría fina; molida, clasificada y seleccionada, para obtener un producto de grado alimentario, de fácil dosificación y alta solubilidad, libre de insolubles."
          useCases="Desarrollada para la industria de la panificación, embutidos, productos cárnicos, precocinados, conservas, salsas, chocolates, productos lácteos y pastelería."
          presentations="50kg, 25 kg y 25 unidades de 1 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/refinada-fina-item.jpg"
        />
      </div>
    </Container>
  );
}
