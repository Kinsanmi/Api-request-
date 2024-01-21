import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[];
}


const initialState: ReservationState = {
    value: []
}

export const reservation = createSlice({
    name: "Reservation",
    initialState,
    reducers : { 
        addReservation: (state, action: PayloadAction<string>) =>{
            state.value.push(action.payload)
        },

        removeReservation: (state, action: PayloadAction<string>) => {
            state.value.splice
        }
    }

    
})


export const {addReservation} = reservation.actions


export default reservation.reducer