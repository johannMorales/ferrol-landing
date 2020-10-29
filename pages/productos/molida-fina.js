import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="Molida fina"
          description="Sal marina secada a más de 100 grados centígrados; molida y seleccionada, para obtener un producto de grado alimentario de alta solubilidad, libre de insolubles."
          useCases="Desarrollada para la preparación de quesos, conservas y otros procesos que requieran preparar salmueras homogéneas rápidamente."
          presentations="50kg y 25 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/molida-fina-item.jpg"
        />
      </div>
    </Container>
  );
}
