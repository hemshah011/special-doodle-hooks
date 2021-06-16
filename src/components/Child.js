import React,{useContext} from 'react'
import { UserContext,ChannelConext } from '../App'

const Child = () => {
    const user=useContext(UserContext)
    const channel=useContext(ChannelConext)
    return (
        <div>
            Child Component {user} and {channel}
        </div>
    )
}

export default Child
