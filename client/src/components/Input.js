import React, { Component } from 'react'

const Input = (props) => {


        return (
            <div class="box">
                <form class="container-1" id="input-item"  action="" onSubmit={props.getName}>
                    <input name="name" id="searcher" type="text" placeholder="Enter Food Item Here" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )

}

export default Input
