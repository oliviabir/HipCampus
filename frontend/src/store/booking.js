import { ValidationError } from "../utils/validationError";
import { csrfFetch } from "./csrf";

const CREATE = 'booking/CREATE'
const READ = 'booking/READ'
const REMOVE = 'booking/REMOVE'

const create = (newBooking) => ({
    type: CREATE,
    newBooking
})

const read = (bookings) => ({
    type: READ,
    bookings
})

const remove = (bookingToDelete) => ({
    type: REMOVE,
    bookingToDelete
})

export const getBookings = () => async(dispatch) => {
    const response = await csrfFetch('/api/bookings/')

    if (response.ok) {
        const bookings = await response.json()
        dispatch(read(bookings))
    }
}

export const createBooking = (bookingData) => async(dispatch) => {
    try {
        const response = await csrfFetch('/api/bookings/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        if (!response.ok) {
            let error;
            if (response.status === 422) {
                error = await response.json()
                throw new ValidationError(error.errors, response.statusText)
            } else {
                let errorJSON;
                error = await response.text()
                try {
                    errorJSON = JSON.parse(error)
                } catch {
                    throw new Error(error)
                }
                throw new Error(`${errorJSON.title}: ${errorJSON.message}`)
            }
        }

        const booking = await response.json()
        dispatch(create(booking))
        return booking
    } catch (error) {
        throw error
    }
}

// export const deleteBooking = (bookingId) = async(dispatch) => {
//     const response = await csrfFetch(`/api/bookings/${bookingId}`, {
//         method: 'DELETE'
//     })

//     if (response.ok) {
//         const bookingToDelete = await response.json()
//         dispatch(remove(bookingToDelete))
//         return bookingToDelete
//     }
// }

const initialState = {}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                [action.newBooking.id]: action.booking
            }
        case READ:
            const normalizedBookings = {}
            action.bookings.forEach(booking => {
                normalizedBookings[booking.id] = booking
            })
            return {
                ...state,
                normalizedBookings
            }
        case REMOVE:
            const deleteState = {...state}
            delete deleteState[action.bookingToDelete]
            return deleteState
        default:
            return state
    }
}

export default bookingReducer;
