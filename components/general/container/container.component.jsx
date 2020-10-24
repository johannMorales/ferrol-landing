export default function Container({ children }) {
  return (
    <div
      className="px-2 h-full"
      style={{ background: "linear-gradient(to right, #001f44, #002f60)" }}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
