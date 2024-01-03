import produceData from "../mockData/produce.json"
const POPULATE = "produce/POPULATE"
const TOGGLELIKE = 'produce/TOGGLELIKE'

export default function produceReducer(state = {}, action) {
    const nextState = {...state}
    switch (action.type) {
        case POPULATE: {
            action.payload.forEach(produce => {
            nextState[produce.id] = produce;
        });
        return nextState};
        case TOGGLELIKE: {
            nextState[action.produceId].liked = !nextState[action.produceId].liked 
            return nextState

        }
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

export function toggleLike(produceId) {
    return {
        type: TOGGLELIKE,
        produceId
    }
}