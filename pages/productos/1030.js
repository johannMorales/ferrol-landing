import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container>
      <Detail
        name="10/30"
        description="Sal marina secada a más de 110 grados centígrados, de granulometría gruesa, libre de finos; clasificada y seleccionada, para obtener un producto de grado alimentario, seco, de fácil dosificación y de menor velocidad de disolución que las presentaciones de menor granulometría."
        useCases="Desarrollada para procesos de salazón de pescados y carnes."
        presentations="50kg y 25 kg."
        envase="Bolsa sellada por calor recubierta con saco laminado."
      />
    </Container>
  );
}
