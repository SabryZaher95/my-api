const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const transactions = [
    {
      "id": 1,
      "customer_id": 1,
      "date": "2022-01-01",
      "amount": 1000
    },
    {
      "id": 2,
      "customer_id": 1,
      "date": "2022-01-02",
      "amount": 2000
    },
    {
      "id": 3,
      "customer_id": 2,
      "date": "2022-01-01",
      "amount": 550
    },
    {
      "id": 4,
      "customer_id": 3,
      "date": "2022-01-01",
      "amount": 500
    },
    {
      "id": 5,
      "customer_id": 2,
      "date": "2022-01-02",
      "amount": 1300
    },
    {
      "id": 6,
      "customer_id": 4,
      "date": "2022-01-01",
      "amount": 750
    },
    {
      "id": 7,
      "customer_id": 3,
      "date": "2022-01-02",
      "amount": 1250
    },
    {
      "id": 8,
      "customer_id": 5,
      "date": "2022-01-01",
      "amount": 2500
    },
    {
      "id": 9,
      "customer_id": 5,
      "date": "2022-01-02",
      "amount": 875
    },
    {
      "id": 10,
      "customer_id": 1,
      "date": "2022-01-03",
      "amount": 540
    },
    {
      "id": 11,
      "customer_id": 3,
      "date": "2022-01-03",
      "amount": 450
    },
    {
      "id": 12,
      "customer_id": 4,
      "date": "2022-01-03",
      "amount": 100
    },
    {
      "id": 13,
      "customer_id": 5,
      "date": "2022-01-03",
      "amount": 150
    },
    {
      "id": 14,
      "customer_id": 4,
      "date": "2022-01-02",
      "amount": 120
    },
    {
      "id": 15,
      "customer_id": 2,
      "date": "2022-01-03",
      "amount": 1020
    }
  ]

const customers = [
    {
      id: 1,
      name: "Ahmed Ali",
    },
    {
      id: 2,
      name: "Aya Elsayed",
    },

    {
      id: 3,
      name: "Mina Adel",
    },
    {
      id: 4,
      name: "Sarah Reda",
    },
    {
      id: 5,
      name: "Mohamed Sayed",
    },
  ]

app.use(cors());
app.use(bodyParser.json());

// Customers route
app.get("/api/customers", (req, res) => {
  res.json(customers);
});

// Transactions route
app.get("api/transactions", (req, res) => {
  res.json(transactions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
