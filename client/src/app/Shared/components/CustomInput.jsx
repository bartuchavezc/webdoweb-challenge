export const CustomInput = ({ id, changed, value, label, type, placeholder }) => (
  <div>
    <div>
      <label>{label}</label>
    </div>
    <input
      style={{
        padding: "8px",
        margin: "4px",
        border: "1px solid #a7a7a7",
        width: "100%"
      }}
      id={id}
      onChange={changed}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  </div>
);
