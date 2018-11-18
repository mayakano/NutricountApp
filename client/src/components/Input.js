import React, { Component } from 'react'

const Input = (props) => {


        return (
            <div class="box">
                <form class="container-1" id="input-item"  action="" onSubmit={props.getName}>
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <input name="name" id="searcher" type="text" placeholder="Enter Food Here" />
                </form>
            </div>
        )

}

export default Input
