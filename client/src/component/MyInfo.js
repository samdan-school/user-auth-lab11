import React, {useEffect, useState} from 'react'
import { myInfo } from '../service/main';

const MyInfo = () => {
    const [body, setBody] = useState({
        _id : 0,
        email : ""
    })
    useEffect(() => {
        myInfo(res => {
            console.log(res);
            if (res.data == null) return;
            setBody(res.data)
        }, err => {
            console.log(err);
        })
      }, []);

    return (
        <div>
            My info 
            {body._id}
            <br />
            {body.email}           
        </div>
    )
}
export default MyInfo;
