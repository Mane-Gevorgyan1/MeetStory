import './style.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllGifts } from 'src/Redux/action/gift_action'
import { CButton, CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'

const AllGifts = () => {
    const dispatch = useDispatch()
    const allGifts = useSelector(st => st.Gift_reducer.allGifts)

    useEffect(() => {
        dispatch(GetAllGifts())
    }, [])

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary">Создать подарок</CButton>
            </div>
            {allGifts.length
                ? allGifts.map((e, i) => (
                    <CCard style={{ width: '18rem' }} key={i}>
                        <CCardImage orientation="top" src={`${process.env.REACT_APP_IMAGE}/${e?.photo}`} />
                        <CCardBody>
                            <CCardText>Имя: {e?.name}</CCardText>
                            <CCardText>Цена: {e?.price}</CCardText>
                        </CCardBody>
                    </CCard>
                ))
                : <span>Нет подарков</span>}
        </>
    )
}

export default AllGifts