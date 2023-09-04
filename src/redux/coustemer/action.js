export const CoustemerDetails = (coustemerDetails) => {
    return dispatch => {
        dispatch({
            type:'coustemerDetails',
            payload: coustemerDetails
        })
    }
}

export const UpdateCoustemerDetails = (UpdatecoustemerDetails) => {
    return dispatch => {
        dispatch({
            type:'UpdatecoustemerDetails',
            payload: UpdatecoustemerDetails
        })
    }
} 

export const DeleteCoustemerDetails = (DeletecoustemerDetails) => {
    return dispatch => {
        dispatch({
            type:'DeletecoustemerDetails',
            payload: DeletecoustemerDetails
        })
    }
}