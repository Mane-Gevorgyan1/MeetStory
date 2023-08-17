import { FetchGet, FetchPost } from './fetch'

export const GetForumCategories = (search) => { return FetchPost('/admin/get_forum_category', { search }, 'getForumCategories') }
export const GetSingleForumCategories = (category_id) => { return FetchPost(`/admin/single_page_forum_category`, { category_id }, 'getSingleForumCategories') }