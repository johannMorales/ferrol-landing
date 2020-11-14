import React, { useCallback, useState } from "react";
import FondoGradiente from "../../components/fondos/fondo-gradiente/fondo-gradiente.component";
import Container from "../../components/general/container/container.component";
import Viewport from "../../components/general/viewport";
import Card from "../../components/industrias/card/card.component";
import Detail from "../../components/industrias/detail/detail.component";
import Item from "../../components/industrias/item";

const industryCards = [
  {
    basic: {
      name: "Panificación y pastelería",
      image: "/img/industrias/panificacion-y-pasteleria-item.jpg",
    },
    detail: {
      name: "PANIFICACIÓN & PASTELERÍA",
      product: "Sal de Mar",
      subtitle: "Refinada Gruesa / Refinada Fina",
      description:
        "Ingrediente esencial para realzar el sabor y la calidad de tus preparaciones.",
      captions: ["Corteza fina y crujiente", "Masa firme y manejable"],
      image: "/img/industrias/panificacion-y-pasteleria-detalle.jpg",
      badge: "img/industrias/panificacion-y-pasteleria-badge.png",
      list: [
        "Regulador de la actividad microbiológica y enzimática",
        "Regulador de fermentación",
        "Conservante",
        "Potenciador de sabor y color.",
      ],
    },
  },
  {
    basic: {
      name: "Quesos & productos lácteos",
      image: "/img/industrias/quesos-y-productos-lacteos-item.jpg",
    },
    detail: {
      name: "QUESOS & PRODUCTOS LÁCTEOS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / Molida Fina",
      description:
        "Ingrediente esencial para lograr una buena textura, mayor vida útil y un mejor sabor.",
      captions: ["Mejor textura | Mayor tiempo de vida"],
      image: "/img/industrias/quesos-y-productos-lacteos-detalle.jpg",
      badge: "img/industrias/quesos-y-productos-lacteos-badge.png",
      list: [
        "Libre de insolubles",
        "Regulador de la actividad microbiológica y enzimática",
        "Regulador de fermentación",
        "Conservante",
        "Potenciador de sabor, color y mejorador de textura.",
      ],
    },
  },
  {
    basic: {
      name: "Conservas",
      image: "/img/industrias/conservas-item.jpg",
    },
    detail: {
      name: "CONSERVAS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / Molida Fina",
      description:
        "Ingrediente esencial para realzar el sabor de tus conservas.",
      captions: ["Conservante natural"],
      image: "/img/industrias/conservas-detalle.jpg",
      badge: "img/industrias/conservas-badge.png",
      list: [
        "Fácil dosificación",
        "Libre de insolubles",
        "Conservante, corrector y potenciador de sabor.",
      ],
    },
  },
  {
    basic: {
      name: "Chocolatería y pastelería",
      image: "/img/industrias/chocolateria-y-pasteleria-item.jpg",
    },
    detail: {
      name: "CHOCOLATERIA & PASTELERÍA",
      product: "Sal de Mar",
      subtitle: "Refinada Gruesa /Refinada Fina / 30/80 / Impalpable",
      description: "Agrégale un toque de distinción a tus recetas.",
      captions: ["Mayor eslasticidad y plasticidad de la masa"],
      image: "/img/industrias/chocolateria-y-pasteleria-detalle.jpg",
      badge: "img/industrias/chocolateria-y-pasteleria-badge.png",
      list: [
        "Potencia el sabor",
        "Regulador de la actividad microbiológica y enzimática",
        "Regulador de fermentación",
        "Conservante",
        "Potenciador de sabor, color y mejorador de textura.",
      ],
    },
  },
  {
    basic: {
      name: "Salazón y anchoas",
      image: "/img/industrias/salazon-item.jpg",
    },
    detail: {
      name: "SALAZON & ANCHOAS",
      product: "Sal de Mar",
      subtitle: "KD/ 10/30 / Gruesa",
      description:
        "Su origen marino mantiene la tradición artesanal europea en tus productos.",
      captions: ["Tradición europea"],
      image: "/img/industrias/salazon-detalle.jpg",
      badge: "img/industrias/salazon-badge.png",
      list: [
        "Conservante",
        "Insumo de calidad alimentaria",
        "Regulador de la actividad microbiológica y actividad del agua",
        "Corrector de sabor.",
      ],
    },
  },
  {
    basic: {
      name: "Snacks",
      image: "/img/industrias/snacks-item.jpg",
    },
    detail: {
      name: "SNACKS",
      product: "Sal de Mar",
      subtitle: "Gruesa / Fina /Impalpable",
      description: "El sabor salado original en todos los momentos.",
      captions: ["Menos sodio | Mejor sabor"],
      image: "/img/industrias/snacks-detalle.jpg",
      badge: "img/industrias/snacks-badge.png",
      list: ["Conservante", "Fácil dosificación"],
    },
  },
  {
    basic: {
      name: "Embutidos y productos cárnicos",
      image: "/img/industrias/embutidos-y-carnicos-item.jpg",
    },
    detail: {
      name: "EMBUTIDOS & PRODUCTOS CARNICOS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / 30/80",
      description:
        "Ingrediente esencial para realzar el sabor de tus conservas.",
      captions: ["Mejor compactación"],
      image: "/img/industrias/embutidos-y-carnicos-detalle.jpg",
      badge: "img/industrias/embutidos-y-carnicos-badge.png",
      list: [
        "Potenciador de sabor",
        "Conservante natural",
        "Conservante, aglutinante, corrector y potenciador de sabor.",
      ],
    },
  },
  {
    basic: {
      name: "Pastas y masas congeladas",
      image: "/img/industrias/pastas-y-masas-congeladas-item.jpg",
    },
    detail: {
      name: "PASTAS Y MASAS CONGELADAS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / 30/80",
      description:
        "El sabor salado de toda la vida, para ese sabor casero con tradición italiana. ",
      captions: ["Masa firme y manejable"],
      image: "/img/industrias/pastas-y-masas-congeladas-detalle.jpg",
      badge: "img/industrias/pastas-y-masas-congeladas-badge.png",
      list: [
        "Mejor Textura",
        "Mejor sabor",
        "Conservante, corrector y potenciador de sabor.",
      ],
    },
  },
  {
    basic: {
      name: "Nuggets y precocidos",
      image: "/img/industrias/nuggets-item.jpg",
    },
    detail: {
      name: "NUGGETS & PRECOCIDOS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / 30/80",
      description:
        "El sabor salado que conoces, para ese sabor casero como hecho en casa.",
      captions: ["Mejor compactación"],
      image: "/img/industrias/nuggets-detalle.jpg",
      badge: "img/industrias/nuggets-badge.png",
      list: [
        "Potenciador de sabor",
        "Conservante natural",
        "Conservante, aglutinante, corrector y potenciador de sabor.",
      ],
    },
  },
  {
    basic: {
      name: "Salsas",
      image: "/img/industrias/salsas-item.jpg",
    },
    detail: {
      name: "SALSAS",
      product: "Sal de Mar",
      subtitle: "Refinada Fina / 30/80",
      description:
        "Ingrediente esencial para realzar el sabor de tus preparaciones.",
      captions: ["Mejor sabor"],
      image: "/img/industrias/salsas-detalle.jpg",
      badge: "img/industrias/salsas-badge.png",
      list: [
        "Alta solubilidad",
        "Fácil dosificación",
        "Conservante, corrector y potenciador de sabor.",
      ],
    },
  },
];

const ItemAligned = ({ basic, detail }) => {
  const onModalClose = () => {
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const onClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <div className="w-full">
      <Item {...basic} onClick={onClick} />
      <Detail isVisible={modalVisible} {...detail} onClose={onModalClose} />
    </div>
  );
};

const Industrias = () => {
  return (
    <Container>
      <FondoGradiente>
        <Viewport>
          <div className="flex flex-wrap">
            <div className="w-1/6">
              <Card
                name="PANIFICACÓN, PASTELERÍA, CHOCOLATERÍA Y PASTAS"
                description="Regulador de la actividad microbiológica y enzimática, regulador de fermentación, conservante, potenciador de sabor y color."
              ></Card>
            </div>
          </div>
        </Viewport>
      </FondoGradiente>
      <FondoGradiente>
        <Viewport>
          <React.Fragment>
            <span className="font-black text-5xl uppercase text-center d-inline text-white block my-8 md:py-12 leading-none">
              Industrias
            </span>
            <div
              style={{ backgroundColor: "#011b39" }}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative p-6"
            >
              {industryCards.map((card, i) => (
                <ItemAligned key={i} {...card} />
              ))}
            </div>
          </React.Fragment>
        </Viewport>
      </FondoGradiente>
    </Container>
  );
};

export default Industrias;
