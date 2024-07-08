import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [P, setP] = useState(0);
  const [P2, setP2] = useState(0);
  const tip = billValue * ((P + P2) / 2 / 100);
  function handleReset() {
    setBillValue("");
    setP(0);
    setP2(0);
  }
  return (
    <div>
      <BillInput billValue={billValue} onsetBill={setBillValue} />
      <Percentage P={P} onSelect={setP}>
        How did you like the service?
      </Percentage>
      <Percentage P={P2} onSelect={setP2}>
        How did your friend like the service?
      </Percentage>
      {billValue > 0 && (
        <>
          <Output billValue={billValue} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ billvalue, onsetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={billvalue}
        onChange={(e) => onsetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Percentage({ children, P, onSelect }) {
  return (
    <div>
      <label>{children} </label>
      <select value={P} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ billValue, tip }) {
  return (
    <div>
      <h3>
        You pay ${billValue + tip}(${billValue}+ ${tip})tip
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
