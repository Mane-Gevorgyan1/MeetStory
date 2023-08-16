import './style.css'
import EditGift from '../popup/editGift'
import CreateGift from '../popup/createGift'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteGift, GetAllGifts } from 'src/Redux/action/gift_action'
import { CButton, CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'

const AllGifts = () => {
    const dispatch = useDispatch()
    const allGifts = useSelector(st => st.Gift_reducer.allGifts)
    const [openGift, setOpenGift] = useState(false)
    const [openEditGift, setOpenEditGift] = useState(false)
    const [giftId, setGiftId] = useState('')
    const [newGift, setNewGift] = useState(new Date())

    useEffect(() => {
        dispatch(GetAllGifts())
    }, [newGift])

    function deletePhoto(id) {
        dispatch(DeleteGift(id))
    }

    return (
        <>
            {openGift &&
                <CreateGift
                    open={openGift}
                    setOpen={setOpenGift}
                    setNewGift={setNewGift}
                />
            }
            {openEditGift &&
                <EditGift
                    open={openEditGift}
                    setOpen={setOpenEditGift}
                    gift_id={giftId}
                    setNewGift={setNewGift}
                />
            }
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '20px' }}>
                <CButton color="primary" onClick={() => setOpenGift(true)}>Создать подарок</CButton>
            </div>
            <div className='allGifts'>
                {allGifts.length
                    ? allGifts.map((e, i) => (
                        <CCard style={{ width: '18rem' }} key={i}>
                            <CCardImage className='giftImage' orientation="top" src={`${process.env.REACT_APP_IMAGE}/${e?.photo}`} />
                            <CCardBody>
                                <CCardText>Имя: {e?.name}</CCardText>
                                <CCardText>Цена: {e?.price} ₽</CCardText>
                                <div className='giftButtons'>
                                    <CButton color="warning" onClick={() => {
                                        setGiftId(e?.id)
                                        setOpenEditGift(true)
                                    }}>Изменить</CButton>
                                    <CButton color="danger" onClick={() => deletePhoto(e.id)}>Удалить</CButton>
                                </div>
                            </CCardBody>
                        </CCard>
                    ))
                    : <span>Нет подарков</span>}
            </div>
        </>
    )
}

export default AllGifts