import Queue from '../utils/queue';

import {
  RESET_GAME,
  BEGIN_GAME,
  END_GAME,
  SET_TURN_SIMON,
  SET_TURN_PLAYER,
  ADD_SEQUENCE_ITEM,
  REFRESH_SEQUENCE_BUFFER,
  DEQUEUE_SEQUENCE_BUFFER,
  DEQUEUE_SEQUENCE_BUFFER_TO_VALID,
  SET_LIT_ITEM,
  UNSET_LIT_ITEM_DEQUEUE_BUFFER,
} from '../actions/game';

const initialState = {
  gameStart: false,
  gameLost: false,
  didReset: false,

  curScore: 0,
  maxScore: 0,
  
  sequence: new Queue(),
  sequenceBuffer: new Queue(),
  isSimonReadingSequence: false,
  litItem: null
};

const colorChoices = ['green', 'red', 'yellow', 'blue'];

export function gameReducer(state=initialState, action){
  let newSequence = new Queue();
  let newSequenceBuffer= new Queue();

  let newItemColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
  let newItemSimonSaid = Math.random() < .85 ? true : false;

  let newSequenceItem = {
    color: newItemColor,
    simonSaid: newItemSimonSaid
  }
  
  let newCurScore;
  let newMaxScore;

  console.log('Encountered action: ', action.type)
  
  switch(action.type){

    case RESET_GAME:
      newSequenceItem.simonSaid = true;
      newSequence.enqueue(newSequenceItem);
      newSequenceBuffer.enqueue(newSequenceItem);

      return {...state,
        gameStart: false,
        gameLost: false,
        didReset: true,
        curScore: 0,
        sequence: newSequence,
        sequenceBuffer: newSequenceBuffer,
        isSimonReadingSequence: true
      }

    case BEGIN_GAME:
      return {...state,
        gameStart: true,
        didReset: false
      }
    
    case END_GAME:
      return {...state,
              gameStart: false,
              gameLost: true
      }

    case SET_TURN_SIMON:
      newCurScore = state.sequence.getLength();
      newMaxScore = newCurScore > state.maxScore ? newCurScore : state.maxScore;
      newSequence.initFromArray(state.sequence.viewQueue());
      newSequence.enqueue(newSequenceItem);
      return {...state,
              sequence: newSequence,
              isSimonReadingSequence: true,
              curScore: newCurScore,
              maxScore: newMaxScore
      }

    case SET_TURN_PLAYER:
      return {...state,
              isSimonReadingSequence: false
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

      
    case DEQUEUE_SEQUENCE_BUFFER_TO_VALID:
      newSequenceBuffer.initFromArray(state.sequenceBuffer.viewQueue());
      newSequenceBuffer.dequeue();
      while(newSequenceBuffer.front() && !newSequenceBuffer.front().simonSaid){
        newSequenceBuffer.dequeue();
      }
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
