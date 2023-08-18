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
        case 'deleteForumCategory':
            if (action.payload.status) {
                window.location = '/base/forumCategories#/base/forumCategories'
            }
            break;
        case 'getForums':
            if (action.payload.status) {
                temp.allForums = action.payload.data.data
            }
            break;
        default:
            return temp;
    }
    return temp;
}