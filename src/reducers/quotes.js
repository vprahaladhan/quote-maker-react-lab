export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE': 
      return [...state, action.quote]

    case 'REMOVE_QUOTE': 
      const index = state.indexOf(state.find(quote => quote.id === action.quoteId))
      let new_state = [...state]
      new_state.splice(index, 1)
      return new_state

    case 'UPVOTE_QUOTE':
      const upQuote = state.find(quote => quote.id === action.quoteId)
      const upIndex = state.indexOf(upQuote)
      let up_new_state = [...state]
      console.log("Quote before adding vote > ", state.find(quote => quote.id === action.quoteId))
      up_new_state.splice(upIndex, 1, {...upQuote, votes: upQuote.votes + 1})
      console.log("Quote after adding vote > ", up_new_state.find(quote => quote.id === action.quoteId))
      return up_new_state

    case 'DOWNVOTE_QUOTE':
      const downQuote = state.find(quote => quote.id === action.quoteId)
      const downIndex = state.indexOf(downQuote)
      let down_new_state = [...state]
      down_new_state.splice(downIndex, 1, {...downQuote, votes: downQuote.votes > 0 ? downQuote.votes - 1 : 0})
      return down_new_state

    default: return state;
  }
};