export const GET_RESTRO_LOADING ="GET_RESTRO_LOADING"

export const GET_RESTRO_SUCCESS="GET_RESTRO_SUCCESS";

export const GET_RESTRO_FAILURE="GET_RESTRO_FAILURE";


export const get_restro_loading =()=>{
    return{
        type:GET_RESTRO_LOADING
    }
}

export const get_restro_success=(payload)=>{
    return {
        type:GET_RESTRO_SUCCESS,
        payload
    }
}

export const get_restro_failure =()=>{

    return {
        type:GET_RESTRO_FAILURE
    }
}

