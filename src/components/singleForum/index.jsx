import './style.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetForums, GetSingleForum } from "src/Redux/action/forumCategory_action"
import { CButton, CFormInput } from '@coreui/react'
import CreateForum from '../popup/createForum'

const SingleForum = () => {
    const dispatch = useDispatch()
    const href = window.location.href.split('/')
    const forum = useSelector(st => st.ForumCategory_reducer.singleForum)
    const [newForum, setNewForum] = useState(new Date())

    useEffect(() => {
        getForum()
    }, [newForum])

    function getForum() {
        dispatch(GetSingleForum(href[href.length - 1]))
    }

    return (<>
        <div className='categoriesTop'>
            <CFormInput placeholder="Поиск" onChange={(e) => getCategories(e.target.value)} style={{ width: '300px', marginBottom: '20px' }} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
                <CButton color="warning" className="me-md-2">Редактировать</CButton>
                <CButton color="danger" className="me-md-2">Удалить</CButton>
            </div>
        </div>
        <div className="forumCategories">
            <div className='eachForum'>
                <div className='eachForumUser'>
                    <img alt='' src={`${process.env.REACT_APP_IMAGE}/${forum?.user?.avatar}`} />
                    <span>{forum?.user?.name} {forum?.user?.surname}</span>
                </div>
                <div className='eachForumImages'>
                    {forum?.photo?.map((e, i) => (
                        <img alt='' src={`${process.env.REACT_APP_IMAGE}/${e?.photo}`} key={i} />
                    ))}
                </div>
                <div className='eachForumDescription'>
                    <p>{forum?.description}</p>
                </div>
            </div>
        </div>
    </>)
}

export default SingleForum