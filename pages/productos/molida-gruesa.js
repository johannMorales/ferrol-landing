import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="Molida gruesa"
          description="Sal marina secada a más de 100 grados centígrados; molida y seleccionada, para obtener un producto de grado alimentario, libre de insolubles."
          useCases="Desarrollada para la preparación de pescado seco salado y el mantenimiento de la cadena de frio."
          presentations="50kg y 25 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/molida-gruesa-item.jpg"
        />
      </div>
    </Container>
  );
}
