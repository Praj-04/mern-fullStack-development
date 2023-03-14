import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchData =  createAsyncThunk("products/fetchData", async()=>{
    const response = await fetch("https://api...escuelajs.co/api/v1/products");
    const data = await response.json();
    return data;
})

const productSlice = createSlice ({
    name: 'productSlice',
    initialState : {
        products : [],
        status:"idle", // 4 status => loading,success,failed,idle 
        error:null,
    },
//     reducers : {
//        loadProducts : (state,action) =>{
// state.products = action.payload
//     },
//     deleteProduct : (state,action) =>{
//     } },
    extraReducers: function(builder){
        builder.addCase(fetchData.pending,(state,action)=>{
            state.status ="loading"
        }).addCase(fetchData.fulfilled,(state,action) =>{
            state.products = action.payload;
            state.status= "success"
        }).addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })

    }

}
)

export default productSlice.reducer;
export const {loadProducts,deleteProduct} = productSlice.actions;