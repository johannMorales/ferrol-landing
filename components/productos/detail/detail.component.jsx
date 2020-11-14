export default function Detail({
  name,
  description,
  useCases,
  presentations,
  envase,
  image,
}) {
  return (
    <React.Fragment>
      <div
        className="p-4 md:py-8 md:px-10"
        style={{ backgroundColor: "#023360" }}
      >
        <h2 className="text-white font-black uppercase text-3xl md:text-6xl leading-none my-2">
          {name}
        </h2>
        <hr />
        <div className="md:flex">
          <div className="md:w-3/5">
            <div className="text-white text-justify mt-2 md:mt-4 md:text-lg">
              {description}
            </div>
            <div className="text-white text-justify mt-2 md:mt-4 md:text-lg">
              {useCases}
            </div>
          </div>
          <div className="my-3 w-full md:w-2/5 md:ml-8 md:my-4 h-auto">
            <img className="w-full h-auto" alt={name} src={image} />
          </div>
        </div>
        <div className="text-white mt-2 md:mt-4 md:text-lg">
          <span className="font-black"> Presentaciones:</span> {presentations}
        </div>
        <div className="text-white md:text-lg">
          <span className="font-black"> Envase:</span> {envase}
        </div>
      </div>
    </React.Fragment>
  );
}
