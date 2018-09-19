import {
  INCREMENT_COLOR
} from '../actions/game';

const initialState = {
  gameStart: false,
  
  sequence: [], //the expanding sequence for this game
  sequenceBuffer: [], //copy of sequence to pop from
  isSimonReadingSequence: false,
  isItemLit: false,


  //for early testing purposes
  colors:{
    green: 0,
    red: 0,
    yellow: 0,
    blue: 0
  }
};

export function gameReducer(state=initialState, action){
  let newColors = {...state.colors};
  
  switch(action.type){

    case INCREMENT_COLOR:
      newColors[action.color]++;
      
      return {...state,
              colors: newColors
      }
  }
}
