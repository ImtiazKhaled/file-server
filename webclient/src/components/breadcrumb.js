import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Breadcrumb } from 'antd'

const Breadcrumbs = (props) => {
    
    const [currDir, changeCurrDir] = useState([])
    const state = useSelector(state => state) 
    
    state.then(object => {
        changeCurrDir(object.currDir)
    })

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