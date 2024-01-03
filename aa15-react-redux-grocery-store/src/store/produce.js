import produceData from "../mockData/produce.json"
const POPULATE = "produce/POPULATE"
export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE: {
            const nextState = {...state}
            action.payload.forEach(produce => {
            nextState[produce.id] = produce;
        });
        return nextState};
        default:
            return state;
    }
}
export function populateProduce() {
    return {
        type: POPULATE, 
        payload: produceData
    }
}