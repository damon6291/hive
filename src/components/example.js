import React, { useState } from 'react';

const Example = (props) => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setDrop(!drop)}>Select</button>
      <ul className={`dropdown-content ${drop ? '' : 'd-none'} `}>
        {props.options.map((option, id) => (
          <li className="checkbox form-group" key={id}>
            <input type="checkbox" id={option.value} value={option.value} name={option.value} />
            <label htmlFor={option.value}>{option.value}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
