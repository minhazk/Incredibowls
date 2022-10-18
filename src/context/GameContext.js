import { useContext, createContext, useReducer } from 'react';

const ACTIONS = {
    create: 'Create',
    edit: 'Edit',
    delete: 'Delete',
    update: 'Update',
};

const GameContext = createContext({});

export const useGameContext = useContext(GameContext);

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.create:
            return;
        case ACTIONS.edit:
            return;
        case ACTION.delete:
            return;
        case ACTIONS.update:
            return;
        default:
            return;
    }
};

export const GameContextProvider = ({ children }) => {
    const [game, dispatch] = useReducer(reducer, {});

    return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

/*

<GameContextProvider>
        <Home />
    <Create />
    <Board />
</GameContextProvider>

*/
