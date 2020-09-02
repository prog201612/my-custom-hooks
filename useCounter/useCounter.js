
import { useState } from 'react';

export const useCounter = ( initialValue = 0 ) => {
  const [state, setState] = useState(initialValue);

  const increment = ( factor = 1 ) => setState( state + factor );
  const decrement = ( factor = 1 ) => setState( state - factor );
  const reset = () => setState( initialValue );

  return {state, increment, decrement, reset};
}