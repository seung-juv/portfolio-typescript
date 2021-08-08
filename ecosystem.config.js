module.exports = {
  apps: [
    {
      name: 'portfolio-client',
      script: './dist/index.js',
      watch: false,
      ignore_watch: ['[/\\]./', 'node_modules', 'logs'],
      exec_mode: 'cluster',
    },
  ],
};
