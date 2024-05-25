import React from "react";

interface InputCompProps {
  label: string;
  placeholder: string;
  isTextArea?: boolean;
}

export default function InputComp({
  label,
  placeholder,
  isTextArea,
}: InputCompProps) {
  return (
    <div className="flex flex-col justify-center gap-2 w-full">
      <div className="text-subTitle">{label}</div>
      {isTextArea ? (
        <textarea
          className={`rounded-xl bg-inputField-background focus:outline-none text-subTitle py-3 px-4 border border-inputField-outline placeholder:text-subtileText`}
          placeholder={placeholder}
          name={label}
          rows={4}
        />
      ) : (
        <input
          className={`rounded-xl bg-inputField-background focus:outline-none text-subTitle py-3 px-4 border border-inputField-outline placeholder:text-subtileText`}
          type="text"
          placeholder={placeholder}
          name={label}
        />
      )}
    </div>
  );
}
