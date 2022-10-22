import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorForm({newColor}) {

  const [form, updateForm] = useState({ name: "", hexCode: "#000" });
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    newColor({ [form.name]: form.hexCode });
    history.push("/colors");
  }

  const {name, hexCode} = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hexCode">Color value</label>
          <input
            type="color"
            name="hexCode"
            id="hexCode"
            onChange={handleChange}
            value={hexCode}
          />
        </div>
       <button>Add color</button>
      </form>
    </div>
  );
}

export default ColorForm;
