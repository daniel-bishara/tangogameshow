import { Typography } from '@mui/material';

const GameResults = ({winrate, wins}) => {
    return(
        <div>
            <Typography align='center'>YOU WON {wins} TIMES!</Typography>
            <Typography align='center'>WIN RATE: {winrate} </Typography>
        </div>
    );
};

export default GameResults;