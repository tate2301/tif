/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

type Props = {
  className?: string;
  label?: string
  value?: any
  setValue?: any
  placeholder?:string
};

const SettingsInput = (props: Props) => {
  return (
    <div className={`${props.className} flex flex-col space-y-2 `}>
      <p className="main-text text-sm font-semibold">{props.label}</p>
      <input
        type="text"
        placeholder={props.placeholder}
        className="p-2 bg-secondary outline-none main-text main-border rounded"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default SettingsInput;
