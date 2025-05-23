import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calci() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center border rounded p-4 shadow">
          <h2 className="mb-4">Calculator</h2>
          <input
            type="text"
            className="form-control mb-3"
            value={input}
            onChange={handler}
          />
          <button
            className="btn btn-success mb-3"
            onClick={() => {
              try {
                setResult(eval(input));
              } catch {
                alert('Invalid Expression');
              }
            }}
          >
            Result
          </button>
          <h4 className="mb-4">Result: {result}</h4>

          <div className="d-grid gap-2">
            {[
              ['1', '2', '3', '+'],
              ['4', '5', '6', '-'],
              ['7', '8', '9', '*'],
              ['0', '00', '000', '/'],
              ['%', 'clr'],
            ].map((row, i) => (
              <div className="btn-group mb-2" key={i}>
                {row.map((btn) => (
                  <button
                    key={btn}
                    className="btn btn-outline-primary"
                    onClick={() =>
                      btn === 'clr' ? setInput('') : setInput(input + btn)
                    }
                  >
                    {btn}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calci;
