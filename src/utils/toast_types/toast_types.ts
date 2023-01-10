export type ToastTypesInterface = 'success' | 'error' | 'warning'

export const ToastTypes = {
    'success': {
        color: 'black',
        hoverColor: 'white',
        // bg: '#008000e1',
        bg: '#49fc67',
        hoverBg: '#002f34',
        borderSize: '5px',
        borderHoverSize: '5px',
        borderColor: 'white',
        hoverBorderColor: 'white',
    },
    'error': {
        color: 'white',
        hoverColor: 'white',
        // bg: '#800000df',
        bg: '#ff5555',
        hoverBg: '#002f34',
        borderSize: '2px',
        borderHoverSize: '2px',
        borderColor: '#002f34',
        hoverBorderColor: '#002f34',
    },
    'warning' : {
        color: 'black',
        hoverColor: '#002f34',
        bg: '#ffee55',
        hoverBg: 'white',
        borderSize: '5px',
        borderHoverSize: '5px',
        borderColor: '#002f34',
        hoverBorderColor: '#002f34',
    }
}