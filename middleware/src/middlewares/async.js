// export default function({ dispatch }) {
//     return function(next) {
//         return function(action) {

//         }
//     }
// };

// This is equivilant to the above syntax 
// export default ({ dispatch }) => next => action => { }

export default ({ dispatch }) => next => action => { 
    // Check to see if the action
    // has a promise on its 'payload' property
    // If it does, then wait for it to resolve
    // If it doesn't, then send the action on to the
    // next middleware
    
    if (!action.payload || !action.payload.then) {
        return next(action);
    };

    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
}