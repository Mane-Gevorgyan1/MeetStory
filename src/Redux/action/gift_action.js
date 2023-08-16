import { FetchGet, FetchPost } from './fetch'

export const GetAllGifts = () => { return FetchGet(`/admin/get_all_gifts`, 'getGifts') }
export const GetPresentedGifts = () => { return FetchPost('/admin/get_sended_gifts', {}, 'getPresentedGifts') }
export const DeleteGift = (gift_id) => { return FetchPost('/admin/delete_gift', { gift_id }, `deleteGift`) }
export const UpdateGift = (gift_id, price) => { return FetchPost('/admin/update_gift', { gift_id, price }, `updateGift`) }