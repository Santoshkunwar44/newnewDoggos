import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { DoggosContext } from '../../context/context';

export default function PositionedSnackbar() {


    const { snackData, dispatch } = React.useContext(DoggosContext)


    React.useEffect(() => {

        if (snackData.open) {
            setTimeout(() => {
                dispatch({ type: "setSnackData", payload: { open: false, text: "" } })
            }, [3000])
        }

    }, [snackData.open])

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            {/* <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}
            >
                Top-Center
            </Button> */}



        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackData.open}
                color="green"
                onClose={handleClose}
                message={snackData.text}
                key={vertical + horizontal}
            />
        </div>
    );
}
