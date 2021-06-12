import React, {useReducer} from 'react';

export type Reducer<S> = (state: S, action: Action) => S;

type Action = {type: string; payload?: unknown};
type ActionCreator = React.Dispatch<Action>;
export type ActionCreatorWrapper = (
  dispatch: React.Dispatch<Action>,
) => ActionCreator;

type ActionCreators = {
  [key: string]: ActionCreatorWrapper;
};

type ActionsBound = {
  [key: string]: ActionCreator;
};

const createDataContext = <S,>(
  reducer: Reducer<S>,
  actions: ActionCreators,
  initialState: S,
) => {
  const Context = React.createContext<unknown>(null);

  const Provider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: ActionsBound = {};

    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};

export default createDataContext;
