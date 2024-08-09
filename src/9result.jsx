import React, { useState } from 'react';

function Result() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [ta, setTA] = useState(0);
  const [da, setDA] = useState(0);
  const [hra, setHRA] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = Number(basicSalary) + Number(ta) + Number(da) + Number(hra);
    setTotalSalary(total);
    
    let calculatedTax = 0;
    if (total >= 80000) {
      calculatedTax = total * 0.2;
    } else if (total >= 50000) {
      calculatedTax = total * 0.15;
    } else if (total >= 30000) {
      calculatedTax = total * 0.1;
    }
    setTax(calculatedTax);
  };

  return (
    <div className="App">
      <h1>Salary and Tax Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Basic Salary:
            <input 
              type="number" 
              value={basicSalary} 
              onChange={(e) => setBasicSalary(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            TA:
            <input 
              type="number" 
              value={ta} 
              onChange={(e) => setTA(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            DA:
            <input 
              type="number" 
              value={da} 
              onChange={(e) => setDA(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            HRA:
            <input 
              type="number" 
              value={hra} 
              onChange={(e) => setHRA(e.target.value)} 
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Total Salary: {totalSalary}</h2>
        <h2>Tax: {tax}</h2>
      </div>
    </div>
  );
}

export default Result;