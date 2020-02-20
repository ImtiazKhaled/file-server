import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'

const Breadcrumbs = (props) => {
    
    const [currDir, changeCurrDir] = useState([])
    const state = useSelector(state => state) 
    
    state.then(object => {
        changeCurrDir(object.currDir)
    })

    const route = (index) => {
        var newUrl = ''
        for(var i = 1; i <= index; i++) {
            newUrl += `/${currDir[i]}`
        }

        props.history.push(newUrl)
    }

    if(currDir !== undefined)
        return <Breadcrumb>
        { 
            currDir.map( (dirName, index) => {
                return <Breadcrumb.Item key={dirName}>
                    <span onClick={() => route(index)}className='breadcrumb-text'> {dirName} </span>
                </Breadcrumb.Item>
            })
        }
        </Breadcrumb>
    else return <div />
}

export default withRouter(Breadcrumbs)