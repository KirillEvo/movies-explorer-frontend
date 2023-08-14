import React from "react";

export default function FilterCheckbox({
  isChecked,
  isCheckedSave,
  handleChecked,
  handleCheckedSave,
  savePage
}) {
  const handleChange = () => {
    if (savePage) {
      handleChecked(!isChecked);
    } else {
      handleCheckedSave(!isCheckedSave)
    }
  };

  return (
    <label className="toggle">
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={savePage ? isChecked : isCheckedSave}
        onChange={handleChange}
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">Короткометражки</span>
    </label>
  );
}
