import store from "../store/forumCategory_store"

export const ForumCategory_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'getForumCategories':
            if (action.payload.status) {
                temp.allForumCategories = action.payload.data
            }
            break;
        case 'getSingleForumCategories':
            temp.singleForumCategory = action.payload.data
            break;
        default:
            return temp;
    }
    return temp;
}