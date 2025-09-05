import React from "react";

function Button({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
