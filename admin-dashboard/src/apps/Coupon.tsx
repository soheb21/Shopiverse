import { useState, type FormEvent, useEffect } from "react";
import Siderbar from "../components/Siderbar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";
const Coupon = () => {
  const [couponText, setCouponText] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [size, setSize] = useState<number>(8);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isLetters, setIsLetters] = useState<boolean>(false);
  const [isSymbols, setIsSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLetters && !isSymbols && !isNumber)
      return alert("Please Select Atleast One ");
    let result: string = prefix || "";
    let length: number = size - result.length;
    for (let i = 0; i < length; i++) {
      let entireString: string = "";
      if (isLetters) entireString += allLetters;
      if (isNumber) entireString += allNumbers;
      if (isSymbols) entireString += allSymbols;
      const randomNum: number = Math.floor(Math.random() * entireString.length);
      result += entireString[randomNum];
    }
    setCouponText(result);
  }
  async function copyText(couponText: string) {
    await window.navigator.clipboard.writeText(couponText);
    setIsCopied(true);
  }
  useEffect(() => {
    setIsCopied(false);
  }, [couponText]);
  return (
    <div className="adminContainer">
      <Siderbar />
      <main className="dashboardAppContainer">
        <h1>Toss Coin</h1>
        <section>
          <form onSubmit={submitHandler} className="coupon-form">
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="Text to include"
              maxLength={size}
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              placeholder="Coupon Length"
              min={8}
              max={25}
            />
            <fieldset>
              <legend>@include</legend>
              <input
                type="checkbox"
                checked={isNumber}
                onChange={() => setIsNumber((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={isLetters}
                onChange={() => setIsLetters((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={isSymbols}
                onChange={() => setIsSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>

            <button type="submit">Generate Coupon</button>
          </form>
          {couponText && (
            <code>
              {couponText}{" "}
              <span onClick={() => copyText(couponText)}>
                {isCopied ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
