import React from 'react'
import { useSelector } from 'react-redux'
import { Breadcrumb } from 'antd'

const Breadcrumbs = (props) => {
    
    const currDir = useSelector(state => state.currDir) 
    // console.log(currDir)

    if(currDir !== undefined)
        return <Breadcrumb>
        { 
            currDir.map( dirName => {
                return <Breadcrumb.Item key={dirName}>
                    <span className='breadcrumb-text'> {dirName} </span>
                </Breadcrumb.Item>
            })
        }
        </Breadcrumb>
    else return <div />
}

export default Breadcrumbs