
let tasks = [];
let idCounter = 1;


const findTaskById = (id) => tasks.find(task => task.id === id);


const validateTask = (taskData) => {
  if (!taskData.title) {
    return { valid: false, error: 'Title is required' };
  }
  if (typeof taskData.title !== 'string') {
    return { valid: false, error: 'Title must be a string' };
  }
  return { valid: true };
};


exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const validation = validateTask(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const newTask = {
    id: idCounter++,
    title: req.body.title,
    description: req.body.description || '',
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.getTask = (req, res) => {
  const task = findTaskById(Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

exports.updateTask = (req, res) => {
  const task = findTaskById(Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const validation = validateTask(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  if (req.body.completed !== undefined) {
    task.completed = Boolean(req.body.completed);
  }
  task.updatedAt = new Date();

  res.json(task);
};

exports.deleteTask = (req, res) => {
  const taskId = Number(req.params.id);
  const initialLength = tasks.length;
  
  tasks = tasks.filter(task => task.id !== taskId);
  
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.status(204).send();
};