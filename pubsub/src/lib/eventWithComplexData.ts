import { EventEmitter } from 'events';

interface EventData {
  id: number;
  someData: string;
}

export const eventWithComplexData = () => {

    const emitter = new EventEmitter();
    
    const startedEventHandler = (data: EventData) => {
      console.log(`started with ${data.id}:${data.someData}`);
    };
    
    emitter.on('start', startedEventHandler);
    
    emitter.emit('start', {id: 1, someData: 'custom data'});
};