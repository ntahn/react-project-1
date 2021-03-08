import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    buttonTicket: {
        width: '125px',
        height: '50px',
        border: '2px solid lightGrey',
        borderRadius: '5px 5px',
        '&:focus': {
            outline: 'none',
            boxShadow: 'none',
        },
        '&:hover': {
            color: 'grey',
        }
    },
    
    styleDatePicker: {
        overflowX: 'scroll',
        width: '2000px',
        float: 'left',
        position: 'relative',
        height: '100px',
        display: 'flex',
        marginLeft: '0px'
    },
    
    styleDay: {
        fontSize: '18px',
        margin: '0 10px',
        width: '80px',
    },
    
    styleDate: {
        font: '18px',
        textAlign: 'center',
    },
    
    buttonDisabled: {
        color: 'grey',
    },
    
    tabs: {
        fontSize: '25px',
    },
    
    info: {
        color: 'white',
        '&:focus': {
            backgroundColor: 'none',
            color: '#fb4226',
        },
        '&:hover': {
            color: '#fb4226',
        }
    },
    
}));

export default useStyle;
