import Queue from '../utils/queue';

import {
  RESET_GAME,
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

  curScore: 0,
  maxScore: 0,
  
  sequence: new Queue(),
  sequenceBuffer: new Queue(),
  isSimonReadingSequence: true,
  litItem: null
};

const colorChoices = ['green', 'red', 'yellow', 'blue'];

export function gameReducer(state=initialState, action){
  let newSequence = new Queue();
  let newSequenceBuffer= new Queue();

  let newItemColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
  let newItemSimonSaid = Math.random() < .7 ? true : false;

  let newSequenceItem = {
    color: newItemColor,
    simonSaid: newItemSimonSaid
  }  //colorChoices[Math.floor(Math.random() * colorChoices.length)];
  
  let newCurScore;
  let newMaxScore;
  console.log('Reducer received action: ', action.type);
  switch(action.type){

    case RESET_GAME:
      newSequenceItem.simonSaid = true;
      newSequence.enqueue(newSequenceItem);
      newSequenceBuffer.enqueue(newSequenceItem);

      //FOR TESTING
      let newSeq2 = {}
      newSeq2.color = 'red';
      newSeq2.simonSaid = false;
      newSequence.enqueue(newSeq2);
      newSequenceBuffer.enqueue(newSeq2);
      
      let newSeq3 = {}
      newSeq3.color = 'green';
      newSeq3.simonSaid = true;
      newSequence.enqueue(newSeq3);
      newSequenceBuffer.enqueue(newSeq3);
      
      


      //
      return {...state,
        gameStart: true,
        gameLost: false,
        score: 0,
        sequence: newSequence,
        sequenceBuffer: newSequenceBuffer,
        isSimonReadingSequence: true
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
