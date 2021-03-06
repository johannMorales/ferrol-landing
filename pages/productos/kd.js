import FondoProductos from "../../components/fondos/fondo-productos";
import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container Background={FondoProductos}>
      <div className="p-4">
        <Detail
          name="KD"
          description="Sal marina secada a más de 110 grados centígrados, de granulometría extra-gruesa, libre de finos; clasificada y seleccionada, para obtener un producto de grado alimentario, seco, de fácil dosificación y de menor velocidad de disolución que las presentaciones de menor granulometría."
          useCases="Desarrollada para la preparación controlada de salmueras de calidad alimentaria."
          presentations="50kg y 25 kg."
          envase="Bolsa sellada por calor recubierta con saco laminado."
          image="/img/productos/kd-item.jpg"
        />
      </div>
    </Container>
  );
}
