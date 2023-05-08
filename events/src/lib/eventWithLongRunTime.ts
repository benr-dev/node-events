import { EventEmitter } from 'events';

const longRunningEventHandler = (data: string) => {
  console.log(`started: ${data}`);
  
  // Run this asynchronously
  setImmediate(() => {
  
    for (let x = 0; x < 1000; x++) {
      for (let i = 0; i < 10000000; i++) {}
    }
  
    console.log(`finished: ${data}`);
  })
};

export const registerEventWithLongRunTime = (emitter: EventEmitter) => {
  emitter.on('startLongRunning', longRunningEventHandler);
};
