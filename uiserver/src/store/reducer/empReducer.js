const initialState = {
    employees:[]
}
var empReducer = (state=initialState,action)=>{
    if(action.type==='INIT_EMP'){
        console.log("init payload",action.payload)
        return {...state,employees:[...action.payload]}
    }
    return state
}
export default empReducer;