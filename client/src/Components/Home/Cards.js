import React, { useState, useRef } from "react";
import Card from "react-credit-cards-2";
import Payment from "payment";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./Customer.module.css";

const Cards = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  const formRef = useRef();

  function clearNumber(value = "") {
    return value.replace(/\D+/g, "");
  }

  function formatCreditCardNumber(value) {
    if (!value) {
      return value;
    }
    const issuer = Payment.fns.cardType(value);
    const clearValue = clearNumber(value);
    let nextValue;

    switch (issuer) {
      case "amex":
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
          4,
          10
        )} ${clearValue.slice(10, 15)}`;
        break;
      case "dinersclub":
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
          4,
          10
        )} ${clearValue.slice(10, 14)}`;
        break;
      default:
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
          4,
          8
        )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
        break;
    }

    return nextValue.trim();
  }

  function formatCVC(value, prevValue, allValues = {}) {
    const clearValue = clearNumber(value);
    let maxLength = 4;
    if (allValues.number) {
      const issuer = Payment.fns.cardType(allValues.number);
      maxLength = issuer === "amex" ? 4 : 3;
    }
    return clearValue.slice(0, maxLength);
  }

  function formatExpirationDate(value) {
    const clearValue = clearNumber(value);
    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }
    return clearValue;
  }

  function formatFormData(data) {
    return Object.keys(data).map((d) => `${d}: ${data[d]}`);
  }

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState((prevState) => ({ ...prevState, issuer }));
    }
  };

  const handleInputFocus = ({ target }) => {
    setState((prevState) => ({ ...prevState, focused: target.name }));
  };

  const handleInputChange = ({ target }) => {
    let value = target.value;
    // console.log("log:",target?.value);
    if (target.name === "number") {
      value = formatCreditCardNumber(value);
    } else if (target.name === "expiry") {
      value = formatExpirationDate(value);
    } else if (target.name === "cvc") {
      value = formatCVC(value);
    }
    setState((prevState) => ({ ...prevState, [target.name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState((prevState) => ({ ...prevState, formData }));
    formRef.current.reset();
  };

  //   const { name, number, expiry, cvc, focused, issuer, formData } = state;

  return (
    <div key="Payment">
      <div className={styles.App_payment}>
        <Card
          number={state?.number}
          name={state?.name}
          expiry={state?.expiry}
          cvc={state?.cvc}
          focused={state?.focused}
          callback={handleCallback}
        />

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              //   value={state?.number}
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={state?.name}
            />
          </div>
          <div className={styles.form_group2}>
            <div className={styles.cvc}>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={state?.expiry}
              />
            </div>
            <div>
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={state?.cvc}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={state?.issuer} />
        </form>
        {state?.formData && (
          <div className="App-highlight">
            {formatFormData(state?.formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
