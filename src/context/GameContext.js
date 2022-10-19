import { useContext, createContext, useReducer } from 'react';

const ACTIONS = {
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
};

const GameContext = createContext({});
export const useGameContext = () => useContext(GameContext);

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.create:
            return [...state, action.payload];
        case ACTIONS.update:
            return state.map(item => {
                if (e.id === action.payload.id) return { ...item, ...action.payload };
                return item;
            });
        case ACTIONS.delete:
            return state.filter(e => e.id !== action.payload.id);
        default:
            return state;
    }
};

export const GameContextProvider = ({ children }) => {
    const [games, dispatch] = useReducer(reducer, [
        {
            id: 1,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [2, 3, 4, 5],
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [3, 4, 5, 6],
            },
        },
        {
            id: 2,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [2, 3, 4, 5],
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [3, 4, 5, 6],
            },
        },
    ]);

    const createGame = data => {
        dispatch({ type: ACTIONS.create, payload: data });
    };

    const updateGame = data => {
        dispatch({ type: ACTIONS.update, payload: data });
    };

    const deleteGame = id => {
        dispatch({ type: ACTIONS.delete, payload: { id } });
    };

    return <GameContext.Provider value={{ games, createGame, updateGame, deleteGame }}>{children}</GameContext.Provider>;
};
