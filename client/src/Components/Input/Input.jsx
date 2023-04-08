import React, { useState } from "react";
import { useField } from "formik";

import "./input.scss";

export default function Input({ label, id, type, ...props }) {
  const [view, setView] = useState(false);
  const [feild, meta] = useField(props);

  return (
    <div className="container p-0">
      <label className="m-1">{label}</label>
      <br />
      <input
        {...feild}
        {...props}
        className={meta.touched && meta.error ? "is-invalid" : ""}
        autoComplete="off"
        type={
          type === "password" ? (view === false ? "password" : "text") : null
        }
      />
      {meta.error && meta.touched && <p id="container-error">{meta.error}</p>}

      <span className="eye" onClick={() => setView(!view)}>
        {type === "password" ? (
          <ion-icon
            name={view === false ? "eye-outline" : "eye-off-outline"}
          ></ion-icon>
        ) : null}
      </span>

      <ion-icon name={id}></ion-icon>
    </div>
  );
}
