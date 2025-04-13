import app from "./app";
import database from "./db";
import config from './config/config';

// Start server
const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// Handle shutdown
process.on('SIGTERM', () => {
  server.close(async () => {
    await database.$disconnect();
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  server.close(async () => {
    await database.$disconnect();
    console.log('Server closed');
    process.exit(0);
  });
});