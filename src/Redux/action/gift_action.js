import { FetchGet, FetchPost } from './fetch'

// export const DeleteAvatar = (user_id) => { return FetchPost('/admin/delete_user_photo', { user_id }, 'deleteAvatar') }

export const GetAllGifts = () => { return FetchGet(`/admin/get_all_gifts`, 'getGifts') }
