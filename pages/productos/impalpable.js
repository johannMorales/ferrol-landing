import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="Impalpable"
          description="Sal marina secada a más de 110 grados centígrados de granulometría muy fina, seleccionada, para obtener un producto de grado alimentario, seco y de fácil dosificación y alta solubilidad, libre de insolubles."
          useCases="Desarrollada para usos que requieren una mayor dispersión y adherencia en seco a la superficie del insumo."
          presentations="50kg y 25 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/impalpable-item.jpg"
        />
      </div>
    </Container>
  );
}
