import React from 'react'
import { Divider, Icon } from 'antd'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import Breadcrumbs from './breadcrumb'


// var data = [
//     {
//         type: 'folder',
//         name: 'node_modules'
//     },{
//         type: 'folder',
//         name: 'build'
//     },{
//         type: 'file',
//         name: 'index.js'
//     },{
//         type: 'file',
//         name: 'app.css'
//     },{
//         type: 'file',
//         name: 'index.html'
//     }
// ]

const Explorer = (props) => {

    const dirs = useSelector(state => state.dirs)
    const files = useSelector(state => state.files)
    console.log(dirs)
    console.log(files)

    return <div className='full-page'>
        <Breadcrumbs />
        <div className='rm-4'>
            <Divider />
            {
                dirs !== undefined ? dirs.map( item => {
                    return <Link key={item.name} to={`${props.url}/${item.name}`}>
                        <Icon type='folder' className='rm-1 file-list-text'/>
                        <span className='file-list-text ' >
                            {item.name}
                        </span>
                        <Divider />
                    </Link>  
                }) : <div />
            }{
                files !== undefined ? files.map( item => {
                    return  <div key={item} className='item-list file-explorer' >
                        <Icon type='file' className='rm-1 file-list-text'/>
                        <span className='file-list-text ' >
                            {item.name}
                        </span>
                        <Divider />
                    </div>
                }) : <div />
            }
        </div>
    </div>
}

export default Explorer
