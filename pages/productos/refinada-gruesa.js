import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";

export default function ProductDetail() {
  return (
    <Container>
      <Detail
        name="Refinada gruesa"
        description="Sal marina secada a más de 110 grados centígrados; molida, clasificada y seleccionada, para obtener un producto de grado alimentario, seco y de fácil dosificación."
        useCases="Desarrollada para la industria alimentaria que requiera sal de granulometría específica para su proceso productivo. En un proceso colaborativo se desarrolla el producto con las especificaciones del cliente."
        presentations="50kg, 25 kg y 25 unidades de 1 kg."
        envase="Bolsa sellada por calor recubierta con saco laminado."
      />
    </Container>
  );
}
