import React from 'react';

function Button({ btn, children, onClick }) {
  return (
    <button onClick={onClick} className={btn}>
      {children}
    </button>
  );
}

export default Button;
