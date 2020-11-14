export default function TextArea({ label }) {
  return (
    <div className="w-100 border border-primary flex p-2 gap-2 flex-col">
      <label className="text-primary whitespace-no-wrap select-none text-sm sm:text-base leading-none sm:leading-normal">
        {label}
      </label>
      <textarea className="w-full text-black appearance-none focus:outline-none leading-none bg-transparent" rows="4"/>
    </div>
  );
}
