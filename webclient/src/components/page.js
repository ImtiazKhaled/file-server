import React from 'react'
import ThemeChanger from './theme_change'
import Explorer from './explorer'
import { useDispatch } from 'react-redux'

const Page = (props) => {

    const dispatch = useDispatch()
    const { pathname } = props.location
    dispatch({type: 'CHANGED_DIR_FORWARD', dir: pathname})
    
    return <div>
        <ThemeChanger />
        <h1 className='file-title'>
            Files
        </h1>
        <Explorer url={pathname} />
    </div>
}

export default Page