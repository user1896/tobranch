import { useReducer } from 'react';

export default function TaskApp() {
  const [stateVar, dispatch] = useReducer( // The useReducer Hook takes two arguments:
    stateReducer, // 1. a reducer function (it's defined below, outside the component)
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
	// It’s a convention to use "switch" statements inside reducers
  switch (action.type) {
    case 'added': {
			// Reducers must be pure. Similar to "state updater functions", They should update objects and arrays 
			// without mutations.
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

////////////////////////////////////
// "use-immer" to write reducers in a mutating style.
////////////////////////////////////

// first install "immer" : "npm install use-immer"

// second import it instead of "useReducer":
import { useImmerReducer } from 'use-immer';

// Now inside the component we declare the state like this:
const [stateVar, dispatch] = useReducer(stateReducer, [])

// The reducer function becomes like this:
function stateReducer(draft, action) {
	// Immer provides us with a special "draft" object which is safe to mutate
  switch (action.type) {
    case 'added': {
			// So reducers managed by "useImmerReducer" can mutate their first argument and don’t need to return state.
			draft.push({
        id: action.id,
        text: action.text
      })
			break // Because we don't return anything, we must use "break" to break from the "switch" loop statement.
    }
    case 'deleted': {
      return draft.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}