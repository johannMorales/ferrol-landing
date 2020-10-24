import React from "react";
import Detail from "../../components/industrias/detail";
import Item from "../../components/industrias/item";

const ItemAligned = (props) => {
  return (
    <div className="lg:w-1/5 md:w-1/3">
      <div className="m-1">
        <Item {...props} />
      </div>
    </div>
  );
};

const Industrias = () => {
  return (
    <React.Fragment>
      <div  
        className="px-2"
        style={{ background: "linear-gradient(to right, #001f44, #002f60)" }}
      >
        <div className="container mx-auto">
          <span className="font-black text-4xl uppercase text-center d-inline text-white block md:py-6">
            Industrias
          </span>
          <div
            style={{ backgroundColor: "#011b39" }}
            className="py-1 md:flex md:flex-wrap"
          >
            <ItemAligned
              name="Panificación y pastelería"
              image="/img/industrias/panificacion-y-pasteleria-item.jpg"
            />
            <ItemAligned
              name="Quesos & productos lácteos"
              image="/img/industrias/quesos-y-productos-lacteos-item.jpg"
            />
            <ItemAligned
              name="Conservas"
              image="/img/industrias/conservas-item.jpg"
            />
            <ItemAligned
              name="Chocolatería y pastelería"
              image="/img/industrias/chocolateria-y-pasteleria-item.jpg"
            />
            <ItemAligned
              name="Salazón y anchoas"
              image="/img/industrias/salazon-item.jpg"
            />
            <ItemAligned
              name="Snacks"
              image="/img/industrias/snacks-item.jpg"
            />
            <ItemAligned
              name="Embutidos y productos cárnicos"
              image="/img/industrias/embutidos-y-carnicos-item.jpg"
            />
            <ItemAligned
              name="Pastas y masas congeladas"
              image="/img/industrias/pastas-y-masas-congeladas-item.jpg"
            />
            <ItemAligned
              name="Nuggets y precocidos"
              image="/img/industrias/nuggets-item.jpg"
            />
            <ItemAligned
              name="Salsas"
              image="/img/industrias/salsas-item.jpg"
            />
          </div>
        </div>
        {/* <Detail
          name="Panificación y pastelería"
          product="Sal de mar"
          subtitle="Refinada Gruesa / Refinada Fina"
          description="Ingrediente esencial para realzar el sabor y la calidad de tus preparaciones."
          list={[
            "Regulador de la actividad microbiológica y enzimática",
            "Regulador de fermentación",
            "Conservante",
            "Potenciador de sabor y color."
          ]}
          image="/img/industrias/panificacion-y-pasteleria-detalle.jpg"
          captions={[
            "Corteza fina y crujiente",
            "Masa firme y manejable"
          ]}
        /> */}
      </div>
    </React.Fragment>
  );
};

export default Industrias;
