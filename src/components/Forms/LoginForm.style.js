
export const styles = {
    screen: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
    },
    parentContainer: {
        padding: '3rem',
        width: '30rem',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    inputBox: {
        backgroundColor: '#E7E0E6',
        width: '100%',
    },
    btn: {
        backgroundColor: 'black',
        color: 'white',
        padding: '15px',
        '&:hover': {
            backgroundColor: 'darkslategray',
        },
    },
    rangeContainer: {
        display: 'flex',
        gap: '10px',
    },
    rangeBox: {
        backgroundColor: '#EFEFEF',
        padding: '15px',
        fontWeight: 600,
    },
};