import {configureStore} from '@reduxjs/toolkit'
import { deleteRequestSliceReducer } from './features/delete_req_slice'

export const store = configureStore({
    reducer : {deleteRequestSliceReducer}
})