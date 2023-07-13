const repository = require('../repositories/projects_repository.js');

// emul_database

let projects = [
  {
    name: "Ecommerce prodcut page",
    id: 1,
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    img: "/images/shop.svg",
  },
  {
    name: "Exploty kittens page",
    id: 2,
    skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "Typrscript" }],
    img: "/images/dapps.jpg",
  },
  {
    name: "Web3 DAPP page",
    id: 3,
    skillsUsed: [{ name: "React" }, { name: "NextJS" }, { name: "Solidity" }],
    img: "/images/ExplodingKittens.jpg",
  },
];


async function getProjects(req, res) {
    const query = req.query;
    const dbProjects = await repository.all();
    // send all if no query
    if (!query.search) {
      res.send(dbProjects);
      return;
    }
    // get query
    const search = query.search.toLowerCase();
    // get in result projects that match the search
    const result = projects.filter((p) => {
      const name = p.name.toLowerCase();
      return name.match(search);
    });
    //send result
    res.send(result);
}

async function insertProject(req, res) {
  const _newProject = req.body;
  _newProject.id = projects[projects.length - 1].id + 1;
  // projects.push(_newProject);
  const result = await repository.create(_newProject);
  if (result.acknowledged) res.status(201).send("Project created successfully");
  else res.status(500).send("Project not created");

}

async function updateProject(req, res) {
  const id = req.params.id;
  const body = req.body;

  const result = await repository.update(id,body);

  if (result.acknowledged) res.status(202).send("Project updated successfully");
  else res.status(500).send("Project not updated");

  // const project = projects.find((p) => p.id == id);
  // if (!project) {
  //   res.status(404);
  //   res.send("Not Found");
  //   return;
  // }

  // project.name = body.name ? body.name : project.name;
  // project.img = body.img ? body.img : project.img;

  // res.send("Done");
}

async function deleteProject(req, res) {
  const id = req.params.id;

  const result = await repository.delete(id);

  if (result.acknowledged) res.status(202).send("Project deleted successfully");
  else res.status(500).send("Project not deleted");

  // const index = projects.findIndex((p) => p.id == id);
  // if (index == -1) {
  //   res.status(404);
  //   res.send("Not Found");
  //   return;
  // }
  // projects.splice(index, 1);
  // res.send("Deleted");
}

async function getProjectById(req, res) {
  const id = req.params.id;
  // const project = projects.find((p) => p.id == id);
  const project = await repository.one(id);

  if (!project) {
    res.status(404);
    res.send("Not Found");
    return;
  }
  res.send(project);
}

module.exports = { getProjects, insertProject, updateProject, deleteProject, getProjectById };
