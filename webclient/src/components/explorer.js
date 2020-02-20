import React, { useState } from 'react'
import { Divider, Icon } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import Breadcrumbs from './breadcrumb'

const Explorer = (props) => {

    const [dirs, changeDirs] = useState([])
    var [files, changeFiles] = useState([])
    const state = useSelector(state => state )
    const dispatch = useDispatch()

    state.then(object => {
        changeDirs(object.dirs)
        changeFiles(files = object.files)
    })

    return <div className='full-page'>
        <Breadcrumbs />
        <div className='rm-4'>
            <Divider />
            {
                dirs !== undefined ? dirs.map( item => {
                    return <Link key={item} to={`${props.url}/${item}`}>
                        <Icon type='folder' className='rm-1 file-list-text'/>
                        <span className='file-list-text ' >
                            {item}
                        </span>
                        <Divider />
                    </Link>  
                }) : <div />
            }{
                files !== undefined ? files.map( item => {
                    return  <div
                                onClick={((e) => dispatch({type: 'GET_FILE', dir: props.url, filename: item}))} 
                                key={item} 
                                className='item-list file-explorer' >
                        <Icon type='file' className='rm-1 file-list-text'/>
                        <span className='file-list-text ' >
                            {item}
                        </span>
                        <Divider />
                    </div>
                }) : <div />
            }
        </div>
    </div>
}

export default Explorer
