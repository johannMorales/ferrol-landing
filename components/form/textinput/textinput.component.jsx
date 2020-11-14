import React from 'react';

function TextInput({ label, type, required }) {
  return (
    <div className="w-100 border border-primary flex p-2 gap-2 flex-col sm:flex-row">
      <label className="text-primary whitespace-no-wrap select-none text-sm sm:text-base leading-none sm:leading-normal">
        {label}
      </label>
      <input
        type={type || "text"}
        aria-label={label}
        aria-required={required || "false"}
        className="w-full text-black appearance-none focus:outline-none leading-none bg-transparent"
      />
    </div>
  );
}

export default TextInput;
