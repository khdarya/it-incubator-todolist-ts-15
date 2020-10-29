import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from '../api/todolists-api'

export const handleServerError = <T>(data: ResponseType<T>, dispatch: Dispatch<ServerErrorType>) => {

    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = <T>(err: {message: string}, dispatch: Dispatch<ServerErrorType>) => {
    dispatch(setAppErrorAC(err.message))
    dispatch(setAppStatusAC('failed'))
}


type ServerErrorType = SetAppStatusActionType
    |SetAppErrorActionType