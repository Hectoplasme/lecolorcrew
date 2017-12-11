var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('02_tasks', { recurse: true });
