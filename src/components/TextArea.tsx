export default function TextArea({
  id,
  name,
  index,
  label,
  value,
  onChange,
  placeholder,
  labelOpacity,
  onkeyUp,
  onkeyDown,
  onFocus,
  onBlur,
}: {
  id?: string;
  name: string;
  index: string;
  label: string;
  value: string;
  placeholder: string;
  labelOpacity: number;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onkeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onkeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mx-px mt-[1.5em] flex space-x-5 md:mx-[3em] md:mt-[3em] md:space-x-10">
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
        <textarea
          id={id}
          rows={5}
          cols={57}
          name={name}
          value={value}
          onKeyUp={onkeyUp}
          onKeyDown={onkeyDown}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete="false"
          aria-autocomplete="none"
          placeholder={placeholder}
          className="scrollbar-visible w-full resize-none bg-white pb-0 pt-[0.3em] text-[14px] font-bold leading-[1.6] text-black placeholder:select-none placeholder:font-medium placeholder:text-black/40 xs:text-[clamp(18px,1.5vw,1.5em)]"
        />
      </div>
    </div>
  );
}
