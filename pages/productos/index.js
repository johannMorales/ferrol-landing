import React from "react";
import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";
import Item from "../../components/productos/item";

export default function Productos() {
  return (
    <Container>
      <Item
        name="KD"
        image="/img/industrias/panificacion-y-pasteleria-item.jpg"
      />
      <Detail
        name="KD"
        description="Sal marina secada a más de 110 grados centígrados, de granulometría extra-gruesa, libre de finos; clasificada y seleccionada, para obtener un producto de grado alimentario, seco, de fácil dosificación y de menor velocidad de disolución que las presentaciones de menor granulometría."
        useCases="Desarrollada para la preparación controlada de salmueras de calidad alimentaria."
        presentations="50kg y 25 kg."
        envase="Bolsa sellada por calor recubierta con saco laminado."
      />
    </Container>
  );
}
