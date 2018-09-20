
export const RESET_GAME = 'RESET_GAME';
export const resetGame = () =>({
  type: RESET_GAME
});

export const END_GAME = 'END_GAME';
export const endGame = () =>({
  type: END_GAME
});

export const SET_IS_SIMON_READING = 'SET_IS_SIMON_READING';
export const setIsSimonReading = isReading =>({
  type: SET_IS_SIMON_READING,
  isReading
});

export const ADD_SEQUENCE_ITEM = 'ADD_SEQUENCE_ITEM';
export const addSequenceItem = () =>({
  type: ADD_SEQUENCE_ITEM
});

export const REFRESH_SEQUENCE_BUFFER = 'REFRESH_SEQUENCE_BUFFER';
export const refreshSequenceBuffer = () =>({
  type: REFRESH_SEQUENCE_BUFFER
});

export const DEQUEUE_SEQUENCE_BUFFER = 'DEQUEUE_SEQUENCE_BUFFER';
export const dequeueSequenceBuffer = () =>({
  type: DEQUEUE_SEQUENCE_BUFFER
});

export const SET_LIT_ITEM = 'SET_LIT_ITEM';
export const setLitItem = color =>({
  type: SET_LIT_ITEM,
  color
});

export const UNSET_LIT_ITEM_DEQUEUE_BUFFER = 'UNSET_LIT_ITEM_DEQUEUE_BUFFER';
export const unsetLitItemDequeueBuffer = () =>({
  type: UNSET_LIT_ITEM_DEQUEUE_BUFFER
});