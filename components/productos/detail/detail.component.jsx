export default function Detail({
  name,
  description,
  useCases,
  presentations,
  envase,
  image,
}) {
  return (
    <div className="p-2 md:py-8 md:px-10" style={{ backgroundColor: "#023360" }}>
      <span className="text-white font-black uppercase text-3xl md:text-6xl">{name}</span>
      <hr />
      <div className="md:flex">
          <div className="md:w-3/5">
        <div className="text-white text-justify mt-2 md:mt-4 md:text-2xl"> {description} </div>
        <div className="text-white text-justify mt-2 md:mt-4 md:text-2xl"> {useCases} </div>
        </div>
        <img className="my-3 w-full md:w-2/5 md:ml-8 md:my-4" alt={name} src={image} />
      </div>
      <div className="text-white mt-2 md:mt-4 md:text-2xl">
        <span className="font-black"> Presentaciones:</span> {presentations}
      </div>
      <div className="text-white md:text-2xl">
        <span className="font-black"> Envase:</span> {envase}
      </div>
    </div>
  );
}
