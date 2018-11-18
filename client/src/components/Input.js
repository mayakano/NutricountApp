import React, { Component } from 'react'

const Input = (props) => {
    

        return (
            <div>
                <form id="input-item"  action="" onSubmit={props.getName}>
                    <input name="name" id="searcher" type="text" placeholder="Enter Food Here" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )

}

export default Input
