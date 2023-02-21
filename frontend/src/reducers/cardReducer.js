import { ADD_TO_CARD } from '../constants/cartContants'

export const cartReducer = (state = {cardItems: []} , action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const item = action.payload
      const isItemExist = state.cardItems.find((i) => i.product === item.product)

      if (isItemExist) {
        return{
            ...state,
            cardItems:state.cardItems.map((i)=>i.product===isItemExist.product?item:i),
        }

      } else {
        return{
            ...state,
            cardItems:[...state.cardItems,item]
        }
      }

    default:
      return state
  }
}
