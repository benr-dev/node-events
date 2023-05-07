import { EventEmitter } from 'events';

interface EventData {
  id: number;
  someData: string;
}

const startedEventHandler = (data: EventData) => {
  console.log(`started complex: ${data.id}=${data.someData}`);
  console.log(`finised complex: ${data.id}=${data.someData}`);
};

export const registerEventWithComplexData = (emitter: EventEmitter) => {
    emitter.on('startComplex', startedEventHandler);
};