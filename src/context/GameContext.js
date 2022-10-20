import { useContext, createContext, useReducer, useState } from 'react';
import uuid from 'react-native-uuid';

const ACTIONS = {
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
    updatePlayers: 'Update Players',
    updatePoint: 'Update Point',
};

const GameContext = createContext({});
export const useGameContext = () => useContext(GameContext);

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.create:
            return [...state, action.payload];
        case ACTIONS.delete:
            return state.filter(game => game.id !== action.payload.id);
        case ACTIONS.updatePlayers:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { teamOnePlayers, teamTwoPlayers } = action.payload.players;
                game.teamOne.players = teamOnePlayers;
                game.teamTwo.players = teamTwoPlayers;
                return game;
            });
        case ACTIONS.updatePoint:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { end, team, point } = action.payload;
                game.points[end][`team${team}Shot`] = point;
                game.points[end][`team${team === 1 ? '2' : '1'}Shots`] = 0;
                game.points = end === game.points.length - 1 ? [...game.points, { team1Shot: 0, team2Shot: 0 }] : game.points;
                return game;
            });
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
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
            },
            points: [
                {
                    team1Shot: 0,
                    team2Shot: 0,
                },
            ],
        },
        {
            id: 2,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
            },
            points: [
                {
                    team1Shot: 0,
                    team2Shot: 0,
                },
            ],
        },
    ]);
    const [currentGameID, setCurrentGameID] = useState();

    const createGame = gameInfo => {
        const newGame = {
            id: uuid.v4(),
            ...gameInfo,
            date: new Date(), // until date input is implemented
        };
        setCurrentGameID(newGame.id);
        dispatch({ type: ACTIONS.create, payload: newGame });
    };

    const getCurrentGame = () => {
        return games.find(game => game.id === currentGameID);
    };

    const updatePlayers = players => {
        dispatch({ type: ACTIONS.updatePlayers, payload: { currentGameID, players } });
    };

    const deleteGame = id => {
        dispatch({ type: ACTIONS.delete, payload: { id } });
    };

    const updatePoint = (end, team, point) => {
        dispatch({ type: ACTIONS.updatePoint, payload: { currentGameID, end, team, point } });
    };

    const updateGame = data => {
        dispatch({ type: ACTIONS.update, payload: data });
    };

    return <GameContext.Provider value={{ games, createGame, currentGameID, setCurrentGameID, getCurrentGame, updatePlayers, deleteGame, updatePoint }}>{children}</GameContext.Provider>;
};
