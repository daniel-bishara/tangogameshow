import {Button, Typography, Slider } from '@mui/material';
import React, { useState } from 'react';
import './TangoGame.css';
import GameResults from './GameResults.js';
const TOTAL_ROUNDS = 2000;
const DEFAULT_TRADE_PERCENT = 50;
const TangoGame = () => {
    const [wins, setWins] = useState(null);
    const [winrate, setWinRate] = useState(null);
    const [switchRate, setSwitchRate] = useState(DEFAULT_TRADE_PERCENT);

    const calculateWins = (value) => {
        let result = 0;
        for (let i = 0; i < TOTAL_ROUNDS; i++) {
            let playerChoseWinningCase = Math.floor(Math.random() * 3) === 0;
            let playerSwapped = switchRate >= Math.floor(Math.random() * 99) + 1;

            if (playerChoseWinningCase !== playerSwapped) {
                result += 1;
            }
        }

        let newWinRate = wins/TOTAL_ROUNDS;
        setWins(result);
        setWinRate(newWinRate);
    };

    return (
    <div className='GameWrapper'>
        <Typography variant='h1' sx={{pb: 10}}>{'Tango Game Room'}</Typography>
        <Typography variant='h4' align='center' >{'What is your switch rate?'}</Typography>

        <Slider
            min={0}
            max={100}
            defaultValue={DEFAULT_TRADE_PERCENT}
            size='large'
            color="primary"
            onChange={(value)=>{setSwitchRate(value.target.value)}}
        />

        <Typography align='center'>{switchRate}</Typography>
        <Button  variant='outlined' size='large'  onClick={calculateWins}>Play!</Button>
        {wins && <GameResults winrate={winrate} wins={wins}/>}
    </div>

    );
};

export default TangoGame;