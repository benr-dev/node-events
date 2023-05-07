import { EventEmitter } from 'events';

const startedEventHandler = (data: string) => {
    console.log(`started basic:${data}`);
    console.log(`finshed basic:${data}`);
};

export const registerEventSimple = (emitter: EventEmitter) => {
    emitter.on('start', startedEventHandler);
};