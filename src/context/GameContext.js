import { useContext, createContext, useReducer, useState } from 'react';
import uuid from 'react-native-uuid';

const ACTIONS = {
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
    updatePoint: 'Update Point',
    updateGameInfo: 'Update Game Info',
    updateTeamName: 'Update Team Name',
    updatePlayer: 'Update Player',
};

const GameContext = createContext({});
export const useGameContext = () => useContext(GameContext);

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.create:
            return [...state, action.payload];
        case ACTIONS.delete:
            return state.filter(game => game.id !== action.payload.id);
        case ACTIONS.updatePoint:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { end, team, point } = action.payload;
                game.points[end][`team${team}Shot`] = Number(point);
                game.points[end][`team${team === 1 ? '2' : '1'}Shot`] = 0;
                game.points = end === game.points.length - 1 ? [...game.points, { team1Shot: 0, team2Shot: 0 }] : game.points;
                return { ...game };
            });
        case ACTIONS.updateGameInfo:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { objectKey, value } = action.payload;
                return { ...game, [objectKey]: value };
            });
        case ACTIONS.updateTeamName:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { teamNo, name } = action.payload;
                game[`team${teamNo}`].name = name;
                return { ...game };
            });
        case ACTIONS.updatePlayer:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { teamNo, playerNo, name } = action.payload;
                game[`team${teamNo}`].players[playerNo] = name;
                return { ...game };
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
            rink: 4,
            team1: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            },
            team2: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            },
            points: [
                {
                    team1Shot: 0,
                    team2Shot: 5,
                },
                {
                    team1Shot: 3,
                    team2Shot: 0,
                },
                {
                    team1Shot: 0,
                    team2Shot: 0,
                },
            ],
            images: [],
        },
        {
            id: 2,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            team1: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            },
            team2: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            },
            points: [
                {
                    team1Shot: 0,
                    team2Shot: 0,
                },
            ],
            images: [],
        },
    ]);
    const [currentGameID, setCurrentGameID] = useState();

    const createGame = gameInfo => {
        const newGame = {
            id: uuid.v4(),
            ...gameInfo,
            points: [{ team1Shot: 0, team2Shot: 0 }],
            date: new Date(), // until date input is implemented
            images: [],
        };
        setCurrentGameID(newGame.id);
        dispatch({ type: ACTIONS.create, payload: newGame });
    };

    const getCurrentGame = () => {
        return games.find(game => game.id === currentGameID);
    };

    const findGame = id => games.find(game => game.id === id);

    const deleteGame = id => {
        dispatch({ type: ACTIONS.delete, payload: { id } });
    };

    const updatePoint = (end, team, point) => {
        dispatch({ type: ACTIONS.updatePoint, payload: { currentGameID, end, team, point } });
    };

    const getTotal = (id, end, team) => {
        return findGame(id)
            .points.slice(0, end + 1)
            .reduce((prev, curr) => prev + curr[`team${team}Shot`], 0)
            .toString();
    };

    const getFinalScore = id => {
        const { points } = findGame(id);
        const team1Score = getTotal(id, points.length, 1);
        const team2Score = getTotal(id, points.length, 2);
        return { team1Score, team2Score };
    };

    const getCurrentShot = (team, end) => {
        return getCurrentGame().points[end][`team${team}Shot`];
    };

    const updateGameInfo = (objectKey, value) => {
        dispatch({ type: ACTIONS.updateGameInfo, payload: { currentGameID, objectKey, value } });
    };

    const updateTeamName = (teamNo, name) => {
        dispatch({ type: ACTIONS.updateTeamName, payload: { currentGameID, teamNo, name } });
    };

    const updatePlayer = (teamNo, playerNo, name) => {
        dispatch({ type: ACTIONS.updatePlayer, payload: { currentGameID, teamNo, playerNo, name } });
    };

    console.log(getCurrentGame());

    return (
        <GameContext.Provider
            value={{
                games,
                createGame,
                currentGameID,
                setCurrentGameID,
                getCurrentGame,
                deleteGame,
                updatePoint,
                getTotal,
                getFinalScore,
                getCurrentShot,
                updateGameInfo,
                updateTeamName,
                updatePlayer,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
