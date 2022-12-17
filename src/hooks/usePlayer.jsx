//Data
import players from '../data/players';

//Hooks
import { useEffect, useMemo, useState } from 'react';

const pickPlayer = () => {
    const countries = Object.keys(players);
    const country = countries[Math.floor(Math.random() * countries.length)]
    const player = players[country][Math.floor(Math.random() * players[country].length)]

    player.country = country
    player.guessed = false;
    return player;
}

export const usePlayer = () => {

    const [selectedPlayer,setSelectedPlayer] = useState(null);
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (selectedPlayer === null || selectedPlayer.guessed === true) {
            setSelectedPlayer(pickPlayer());
            setSuccess(false)
        }
    },[selectedPlayer])

    const playerNames = useMemo(() => {
        if (selectedPlayer === null) return null;
        const playerNames = selectedPlayer.name.split(" ");
        const playerNamesWithGuesses = playerNames.map(name =>  {return {name,guesses: []}})
        return playerNamesWithGuesses;
      },[selectedPlayer])

    const checkGuess = (guessNames) => {
        let found = true;
        if (guessNames.length !== playerNames.length) found = false;
        else {
            guessNames.forEach((name,i) => {
                if (name.toLowerCase() !== playerNames[i].name.toLowerCase()) found = false;
            })
        }

        if (found === false) checkGuessedLetters(guessNames);
        else {
            setSuccess(true);
        }
        return found;
    }

    const checkGuessedLetters = (guessNames) => {
        guessNames.forEach((name,i) => {
          const letters = name.split("")
          if (playerNames.length > i) {
            letters.forEach((letra,j) => {
                if (playerNames[i].name.charAt(j).toLowerCase() === letra.toLowerCase()) {
                    playerNames[i].guesses.push(j);
                }
            })
        }
        })
    }

    const setGuessed = () => {
        setSelectedPlayer((prev) => {
            return {...prev,guessed : true}
        })
    }

    return {
        selectedPlayer,
        playerNames,
        success,
        checkGuess,
        setGuessed
    }
}