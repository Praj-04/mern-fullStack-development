import React, { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";
import "./Convertor.css";
import { FcCurrencyExchange } from "react-icons/fc";

function Convertor() {
  const apiUrl = "https://open.er-api.com/v6/latest/USD";
  const tempArray = [];

  const firstValue = "USD";
  const secondValue = "INR";
  const [currency, setCurrency] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(firstValue);
  const [toCurrency, setToCurrency] = useState(secondValue);
  const [convertRate, setConvertRate] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (currency.length == 0) {
      return;
    }

    const fromRate = currency.find((item) => {
      return item.value === fromCurrency;
    }).rate;

    const toRate = currency.find((item) => {
      return item.value == toCurrency;
    }).rate;

    const convertedRate = ((inputValue * toRate) / fromRate).toFixed(6);
    setConvertRate(convertedRate);

    
  }, [inputValue, fromCurrency, toCurrency]);

  useEffect(() => {
    fetchData();

  }, []);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    // const date = jsonData.time_last_update_utc;

    // console.log(data);
    const tempArray = Object.entries(data).map((element) => {
      return {
        label: element[0],
        value: element[0],
        rate: element[1],
      };
    });

    setCurrency(tempArray);

    const today = new Date().toLocaleDateString();
    setDate(today);
  }

  return (
    <div className="container">
      <Card
        className="card-style"
        title={
          <p>
            {" "}
            <FcCurrencyExchange /> Money Exchange <FcCurrencyExchange />{" "}
          </p>
        }
      >
        <Form className="form-style">
          <Form.Item label="Amount">
            <Input className="input-style"
              type="number"
              // style={{ width: "300px" }}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </Form.Item>

          <Form.Item label="From">
            <Select className="input-style"
              // style={{ width: "300px" }}
              options={currency}
              defaultValue={firstValue}
              onChange={(value) => {
                setFromCurrency(value);
              }}
            />
          </Form.Item>

          <Form.Item label="To">
            <Select className="input-style"
              // style={{ width: "300px" }}
              options={currency}
              defaultValue={secondValue}
              onChange={(value) => setToCurrency(value)}
            />
          </Form.Item>
        </Form>

        <div className="bottom">
          <p>
            Conversion Rate : {convertRate}{" "}
          </p>
          <p className="date" style={{ fontSize: "0.75rem" }}>Date:{date} </p>
        </div>
      </Card>
    </div>
  );
}

export default Convertor;
