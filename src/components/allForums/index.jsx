import './style.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetForums } from "src/Redux/action/forumCategory_action"
import { CButton, CFormInput } from '@coreui/react'
import CreateForum from '../popup/createForum'

const AllForums = () => {
    const dispatch = useDispatch()
    const forums = useSelector(st => st.ForumCategory_reducer.allForums)
    const [openCreate, setOpenCreate] = useState(false)
    const [newForum, setNewForum] = useState(new Date())

    useEffect(() => {
        getForums()
    }, [newForum])

    function getForums() {
        dispatch(GetForums())
    }

    return (<>
        {openCreate &&
            <CreateForum
                open={openCreate}
                setOpen={setOpenCreate}
                setNewForum={setNewForum}
            />
        }
        <div className='categoriesTop'>
            <CFormInput placeholder="Поиск" onChange={(e) => getCategories(e.target.value)} style={{ width: '300px', marginBottom: '20px' }} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
                <CButton color="primary" className="me-md-2" onClick={() => setOpenCreate(true)}>Создать форум</CButton>
            </div>
        </div>
        <div className="forumCategories">
            {forums.length
                ? forums.map((e, i) => (
                    <div className="eachForum" style={{ background: e?.color }} key={i} onClick={() => window.location = `/#/forumCategory/${e?.id}`}>
                        <img alt='' src={`${process.env.REACT_APP_IMAGE}/${e?.icon}`} />
                        <span>{e?.name}</span>
                        <span>Приватность: {e?.open_or_close}</span>
                    </div>
                ))
                : <span>Нет форумов</span>
            }
        </div>
    </>)
}

export default AllForums