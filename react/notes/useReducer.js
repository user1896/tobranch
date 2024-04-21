import { useReducer } from 'react';

export default function TaskApp() {
  const [stateVar, dispatch] = useReducer( // The useReducer Hook takes two arguments:
    stateReducer, // 1. a reducer function
    [] // 2. an initial state
  );

  function handleAddTask(text) {
		// Instead of telling React “what to do” by setting state, we specify “what the user just did” by 
		// dispatching (sending) “actions” from the event handlers to the reducer function.
    dispatch(
			// "action" object:
			{
				type: 'added',
				id: nextId++,
				text: text,
    	}
			// The object we pass to dispatch is called an “action”.
			// It is a regular JavaScript object. We decide what to put in it.
			// By convention, it is common to give it a string "type" that describes what happened, and pass any 
			// additional information in other fields.
		);
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
			{stateVar}
      <button onClick={handleAddTask}> add </button>
			<button onClick={handleDeleteTask}> delete </button>
    </>
  );
}

// The function that holds the logic that updates the state depending on the "action type" is called a "reducer".
// It takes two arguments, the "current state" and the "action object", and it returns the "next state":
function stateReducer(currentState, action) {
	// It’s a convention to use switch statements inside reducers
  switch (action.type) {
    case 'added': {
      return [{
        id: action.id,
        text: action.text
      }, ...currentState];
    }
    case 'deleted': {
      return currentState.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
