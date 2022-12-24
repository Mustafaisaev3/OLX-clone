



export type ButtonTypesInterface = 'primary' | 'secondary' | 'primaryBordered'

export const ButtonTypes = {
    'primary': {
        color: '#002f34',
        hoverColor: 'white',
        bg: 'white',
        hoverBg: '#002f34',
        borderSize: '5px',
        borderHoverSize: '5px',
        borderColor: 'white',
        hoverBorderColor: 'white',
    },
    'primaryBordered': {
        color: '#002f34',
        hoverColor: 'white',
        bg: 'white',
        hoverBg: '#002f34',
        borderSize: '2px',
        borderHoverSize: '2px',
        borderColor: '#002f34',
        hoverBorderColor: '#002f34',
    },
    'secondary' : {
        color: 'white',
        hoverColor: '#002f34',
        bg: '#002f34',
        hoverBg: 'white',
        borderSize: '5px',
        borderHoverSize: '5px',
        borderColor: '#002f34',
        hoverBorderColor: '#002f34',
    }
}