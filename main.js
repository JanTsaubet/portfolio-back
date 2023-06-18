const express = require("express");
const app = express();

let projects = [
  {
    name: "Ecommerce prodcut page",
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    img: "/images/shop.svg",
  },
  {
    name: "Exploty kittens page",
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "Typrscript" }],
    img: "/images/dapps.jpg",
  },
  {
    name: "Web3 DAPP page",
    skillsUsed: [{ name: "React" }, { name: "NextJS" }, { name: "Solidity" }],
    img: "/images/ExplodingKittens.jpg",
  },
];

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.post("/projects", (req, res) => {
    console.log(req.headers);
    console.log(req.body);
});

const port = 3000;
app.listen(port, () => console.log("Server started in http://localhost:3000"));
