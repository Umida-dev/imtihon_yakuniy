import React from "react";

const FilterOptions = ({
  options,
  title,
  activeFilters,
  setActiveFilters,
  isOpen,
  setIsOpen,
}) => {
  const handleClear = () => setActiveFilters([]);

  const handleCheckboxChange = (value) => {
    setActiveFilters((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="filters__container">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="filter__btn"
      >
        <span>{title}</span>
        <img
          width={20}
          height={20}
          src="../assets/images/icon-chevron-down.svg"
          alt="toggle filter"
        />
      </button>

      {isOpen && (
        <ul className="filter__item-wrapper">
          {options.map((o) => (
            <li className="f__item" key={o.value}>
              <input
                className="filter__checkbox"
                type="checkbox"
                name={o.value}
                value={o.value}
                checked={activeFilters.includes(o.value)}
                onChange={() => handleCheckboxChange(o.value)}
              />
              {o.label}
            </li>
          ))}
          <button className="clear__btn" type="button" onClick={handleClear}>
            Clear
          </button>
        </ul>
      )}
    </div>
  );
};

export default FilterOptions;

