let tasks = [
  {
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true,
    priority: "medium",
    createdAt: Date.now(),
  },
];

let currentId = 2;

module.exports = {
  tasks,
  getNextId: () => currentId++,
};
