import Queue from '../utils/queue';

import {
  RESET_GAME,
  END_GAME,
  SET_IS_SIMON_READING,
  ADD_SEQUENCE_ITEM,
  REFRESH_SEQUENCE_BUFFER,
  DEQUEUE_SEQUENCE_BUFFER,
  SET_LIT_ITEM,
  UNSET_LIT_ITEM_DEQUEUE_BUFFER,
} from '../actions/game';

const initialState = {
  gameStart: false,
  gameLost: false,
  
  sequence: new Queue(),
  sequenceBuffer: new Queue(),
  isSimonReadingSequence: true,
  litItem: null
};

const colorChoices = ['green', 'red', 'yellow', 'blue'];

export function gameReducer(state=initialState, action){
  let newSequence = new Queue();
  let newSequenceBuffer= new Queue();
  let newSequenceItem =  colorChoices[Math.floor(Math.random() * colorChoices.length)];

  console.log('Reducer received action: ', action.type);
  switch(action.type){

    case RESET_GAME:
      for(let i = 0; i < 3; i++){
        const idx = Math.floor(Math.random() * colorChoices.length);
        newSequence.enqueue(colorChoices[i]); //TODO: CHANGE BACK TO idx
        newSequenceBuffer.enqueue(colorChoices[i]); //TODO: CHANGE BACK TO idx
      }
      return {...state,
        gameStart: true,
        gameLost: false,
        sequence: newSequence,
        sequenceBuffer: newSequenceBuffer,
        isSimonReadingSequence: true
      }

    case END_GAME:
      return {...state,
              gameStart: false,
              gameLost: true
      }

    case SET_IS_SIMON_READING:
      console.log('XXXXXXXXXXX new isReading:', action.isReading)
      return {...state,
              isSimonReadingSequence: action.isReading
      }

    case ADD_SEQUENCE_ITEM:
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

    case SET_LIT_ITEM:
      return {...state,
              litItem: action.color
      }

    case UNSET_LIT_ITEM_DEQUEUE_BUFFER:
      newSequenceBuffer.initFromArray(state.sequenceBuffer.viewQueue());
      newSequenceBuffer.dequeue();
      return {...state,
              litItem: null,
              sequenceBuffer: newSequenceBuffer
      }

    default:
      console.log('default');
      return state;
  }
}
