export default function locale (state = {
    'lang': 'en'
}, action) {
    switch(action.type) {
        case "SET_LANGUAGE":
            return {
                'lang': action.payload
            };
        default: return state;
    }
}