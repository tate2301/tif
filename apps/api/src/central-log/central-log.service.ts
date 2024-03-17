import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // Default logging level
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }), // Log the full stack
    format.splat(),
    format.json(),
  ),
  // Define different transports for different environments
  transports: [
    // Console transport for development
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    // File transport for production (example)
    new transports.File({ filename: 'combined.log' }),
  ],
});

@Injectable()
export class CentralLog {
  static log(message: string, level: 'info' | 'error' = 'info') {
    logger.log({
      level,
      message,
    });
  }
}
