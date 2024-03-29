import React, {ChangeEvent, useState} from 'react';
import style from './ProfileStatusWithHook.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHook: React.FC<ProfileStatusPropsType>  = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                {!editMode &&
                    <div className={style.status}>
                        <b>Status - </b> <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus/>
                    </div>
                }
            </div>
        )
}


export default ProfileStatusWithHook;