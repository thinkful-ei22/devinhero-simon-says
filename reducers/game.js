import Queue from '../utils/queue';

import {
  RESET_GAME,
  ADD_SEQUENCE_ITEM,
  REFRESH_SEQUENCE_BUFFER,
  DEQUEUE_SEQUENCE_BUFFER
} from '../actions/game';

const initialState = {
  gameStart: false,
  
  sequence: new Queue(),
  sequenceBuffer: new Queue(),
  isSimonReadingSequence: false,
  isItemLit: false,
};

const colorChoices = ['green', 'red', 'yellow', 'blue'];

export function gameReducer(state=initialState, action){
  let newSequence = new Queue();
  let newSequenceBuffer= new Queue();
  let newSequenceItem =  colorChoices[Math.floor(Math.random() * colorChoices.length)];

  switch(action.type){

    case RESET_GAME:
      for(let i = 0; i < 3; i++){
        const idx = Math.floor(Math.random() * colorChoices.length);
        newSequence.enqueue(colorChoices[idx]);
        newSequenceBuffer.enqueue(colorChoices[idx]);
      }
      return {...state,
        sequence: newSequence,
        sequenceBuffer: newSequenceBuffer
      }

    case ADD_SEQUENCE_ITEM:
      console.log('new item:', newSequenceItem);
      newSequence.initFromArray(state.sequence.viewQueue());
      newSequence.enqueue(newSequenceItem);
      return {...state,
              sequence: newSequence
      }

    case REFRESH_SEQUENCE_BUFFER:
      newSequenceBuffer.initFromArray(state.sequence.viewQueue());
      return {...state,
              sequenceBuffer: newSequenceBuffer
      }

    case DEQUEUE_SEQUENCE_BUFFER:
      newSequenceBuffer.initFromArray(state.sequenceBuffer.viewQueue());
      newSequenceBuffer.dequeue();
      return {...state,
              sequenceBuffer: newSequenceBuffer
      }

    default:
      return state;
  }
}
