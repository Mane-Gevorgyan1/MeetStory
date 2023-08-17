import './style.css'
import { useEffect } from "react"
import { CButton } from '@coreui/react'
import { useDispatch, useSelector } from "react-redux"
import { GetSingleForumCategories } from "src/Redux/action/forumCategory_action"

const SingleForumCategory = () => {
    const dispatch = useDispatch()
    const category = useSelector(st => st.ForumCategory_reducer.singleForumCategory)

    useEffect(() => {
        const href = window.location.href.split('/')
        dispatch(GetSingleForumCategories(href[href.length - 1]))
    }, [])

    return (<>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
            <CButton color="warning" className="me-md-2" onClick={() => setOpenCreate(true)}>Редактировать</CButton>
            <CButton color="danger" className="me-md-2" onClick={() => setOpenCreate(true)}>Удалить</CButton>
        </div>
        <div className="eachForum" style={{ background: category?.color }} onClick={() => window.location = `/#/forumCategory/${category?.id}`}>
            <img alt='' src={`${process.env.REACT_APP_IMAGE}/${category?.icon}`} />
            <span>{category?.name}</span>
            <span>Приватность: {category?.open_or_close}</span>
        </div>
    </>)
}

export default SingleForumCategory