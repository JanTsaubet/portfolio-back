const express = require("express");
const app = express();

let projects = [
  {
    name: "Ecommerce prodcut page",
    id : 1,
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    img: "/images/shop.svg",
  },
  {
    name: "Exploty kittens page",
    id : 2,
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "Typrscript" }],
    img: "/images/dapps.jpg",
  },
  {
    name: "Web3 DAPP page",
    id : 3,
    skillsUsed: [{ name: "React" }, { name: "NextJS" }, { name: "Solidity" }],
    img: "/images/ExplodingKittens.jpg",
  },
];

//simple middleware
app.use(express.json());

// get all projects wth queries
app.get("/projects", (req, res) => {
  const queries = req.query;
  const search = queries.search.toLowerCase();

  if (!search) {
    res.send(projects);
    return;
  }
  const result = projects.filter((p) => {
    const name = p.name.toLowerCase();
    return name.match(search);
  });
  
  res.send(result);
});

// get project by id
app.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((p => p.id == id));
  if (!project) res.status(404);
  res.send(project);
});

// add project
app.post("/projects", (req, res) => {
  console.log('Got body:', req.body);
  const _newProject = req.body;
  _newProject.id = projects[projects.length-1].id+1;
  projects.push(_newProject);
  res.sendStatus(200);
});
// delete project
app.delete("/projects/:id", (req,res) => {
  const id = req.params.id;
  const index = projects.findIndex((p) => p.id == id);
  if (index == -1) {
    res.status(404);
    res.send("Not Found");
  }
  projects.splice(index, 1);
  res.send("Deleted");
});
// update project
app.put("/projects/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((p => p.id == id));
  if (!project) {
    res.status(404);
    res.send("Not Found");
  }

  const body = req.body;
  project.name = body.name ? body.name : project.name;
  
  res.send("Done");
});

const port = 3000;
app.listen(port, () => console.log("Server started in http://localhost:3000"));
