import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="30/80"
          description="Sal marina secada a más de 120 grados centígrados de granulometría fina, molida, clasificada y seleccionada, para obtener un producto de grado alimentario, seco, de fácil dosificación y alta solubilidad, libre de insolubles."
          useCases="Desarrollada para la preparación de productos alimentarios de calidad premium."
          presentations="50kg y 25 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/3080-item.jpg"
        />
      </div>
    </Container>
  );
}
