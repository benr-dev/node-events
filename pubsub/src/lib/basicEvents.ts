import { EventEmitter } from 'events';

export const eventExample = () => {

    const emitter = new EventEmitter();
    
    const startedEventHandler = (data: string) => {
      console.log(`started with ${data}`);
    };
    
    emitter.on('start', startedEventHandler);
    
    emitter.emit('start', 'custom data');
};