export default function locale (state = {
    'lang': 'en'
}, action) {
    switch(action.type) {
        case "SET_POLISH":
        case "SET_ENGLISH":
            console.log('payload: '+action.payload)
            return {
                'lang': action.payload
            };
        default: return state;
    }
}