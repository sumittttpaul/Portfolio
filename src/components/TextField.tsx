export default function TextField({
  name,
  id,
  index,
  type,
  label,
  value,
  onChange,
  placeholder,
  labelOpacity,
  error,
  errorLabel,
  required,
  onkeyUp,
  onkeyDown,
  onFocus,
  onBlur,
}: {
  name: string;
  id?: string;
  type: string;
  error?: boolean;
  required?: boolean;
  index: string;
  label: string;
  value: string;
  errorLabel?: string;
  placeholder: string;
  labelOpacity: number;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onkeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative mx-px mt-[1.5em] flex space-x-5 md:mx-[3em] md:mt-[3em] md:space-x-10">
      <h4 className="text-[10px] font-black text-black/40 xs:text-[clamp(12px,1vw,1em)]">
        {index}
      </h4>
      <div className="flex w-full flex-col space-y-2">
        <label
          style={{ opacity: labelOpacity }}
          className="text-[15px] font-semibold leading-[1.2] text-black transition-opacity duration-300 ease-out xs:text-[clamp(20px,1.75vw,1.75em)]"
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onKeyUp={onkeyUp}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onkeyDown}
          autoComplete="false"
          aria-autocomplete="none"
          placeholder={placeholder}
          className="w-full bg-white pb-[1.75em] pt-[0.5em] text-[14px] font-bold leading-[0] text-black selection:bg-hover-blue selection:text-white placeholder:select-none placeholder:font-medium placeholder:text-black/40 autofill:text-black xs:pb-[1.5em] xs:text-[clamp(18px,1.5vw,1.5em)] md:pb-[2.25em]"
        />
        {error && (
          <span className="error-alert-before relative ml-px -translate-y-[clamp(1.5em,2vw,2.5em)] leading-[1.1em]">
            <span className="text-xs font-semibold leading-[1rem] text-[#ff4444] xs:text-sm sm:text-[1em]">
              {errorLabel}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
