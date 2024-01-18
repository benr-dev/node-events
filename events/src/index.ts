import { EventEmitter } from 'stream';
import { registerEventSimple } from './lib/basicEvents';
import { registerEventWithComplexData } from './lib/eventWithComplexData';
import { registerEventWithLongRunTime } from './lib/eventWithLongRunTime';

export {registerEventSimple as eventExample} from './lib/basicEvents';
export {registerEventWithComplexData as eventWithComplexData} from './lib/eventWithComplexData';

const emitter = new EventEmitter();
registerEventSimple(emitter);
registerEventWithComplexData(emitter);
registerEventWithLongRunTime(emitter);

emitter.emit('startLongRunning', 'some data for longRunning event');
emitter.emit('start', 'some data for basic event');
emitter.emit('startComplex', {id: 1, someData: 'complex'});
