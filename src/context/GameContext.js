import { useContext, createContext, useReducer, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid'; // universally random id for each game to

const ACTIONS = {
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
    updatePoint: 'Update Point',
    updateGameInfo: 'Update Game Info',
    updateTeamName: 'Update Team Name',
    updatePlayer: 'Update Player',
    updateGames: 'Update Games',
    saveGames: 'Save Games',
    loadGames: 'Load Games',
    addImage: 'Add Image',
};

const STORAGE_KEY = 'Incredibowls@games';

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
        case ACTIONS.updateGames:
            return action.payload;
        case ACTIONS.saveGames:
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (e) {
                console.log(e);
            } finally {
                return state;
            }
        case ACTIONS.loadGames:
            return [...state, { ...action.payload }];
        case ACTIONS.addImage:
            return state.map(game => {
                if (game.id !== action.payload.currentGameID) return game;
                const { uri } = action.payload;
                game.images = [...game.images, uri];
                return game;
            });
        default:
            return state;
    }
};

export const GameContextProvider = ({ children }) => {
    const [games, dispatch] = useReducer(reducer, []);
    const [currentGameID, setCurrentGameID] = useState(null);

    useEffect(() => {
        const load = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && games.length === 0) {
                const games = JSON.parse(storage);
                games.forEach(game => {
                    dispatch({ type: ACTIONS.loadGames, payload: game });
                });
            }
        };
        load();
    }, [STORAGE_KEY]);

    useEffect(() => {
        dispatch({ type: ACTIONS.saveGames });
    }, [games, STORAGE_KEY]);

    const createGame = async (gameInfo, callback) => {
        const newGame = {
            id: uuid.v4(),
            ...gameInfo,
            points: [{ team1Shot: 0, team2Shot: 0 }],
            images: [],
        };
        setCurrentGameID(newGame.id);
        dispatch({ type: ACTIONS.create, payload: newGame });
        if (callback) callback();
    };

    const getCurrentGame = () => {
        return games.find(game => game.id === currentGameID);
    };

    const findGame = id => games.find(game => game.id === id);

    const deleteGame = async id => {
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

    const addImage = uri => {
        dispatch({ type: ACTIONS.addImage, payload: { currentGameID, uri } });
    };

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
                addImage,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
