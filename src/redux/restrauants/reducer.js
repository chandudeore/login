import { GET_RESTRO_FAILURE, GET_RESTRO_LOADING, GET_RESTRO_SUCCESS } from "./action";

const initstate ={
    isloading:false,
    error:false,
    restaurants:[]
}
export const restro_reducer =(state=initstate,{type,payload})=>{

    switch(type){

        case GET_RESTRO_LOADING:
            return{
                ...state,isloading:true,error:false
            }

        case GET_RESTRO_SUCCESS:
            return {
                ...state,isloading:true,error:false,restaurants:[...payload]
            }

        case GET_RESTRO_FAILURE:
            return{
                ...state,isloading:false,error:true,restaurants:[]
            }
        default:
            return state
    }

}
