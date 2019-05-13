import React from 'react';
import './Portfolio.scss';

export class Portfolio extends React.Component {
    render() {
        return (
            <div id='Portfolio' className='Portfolio'>
                <h1 className='Portfolio-header'>
                    Portfolio
                </h1>
                <div class='container Portfolio-projects'>
                    <div class='row Portfolio-projects--line'>
                        <div class='col-5 Portfolio-projects--line-element'>X</div>
                        <div class='col-2 Portfolio-projects--line-vertical'></div>
                        <div class='col-5'>z</div>
                    </div>
                    <div class="row">
                        <div class="col-5">X</div>
                        <div class="col-2"></div>
                        <div class="col-5">z</div>
                    </div>
                </div>
            </div>
        )
    }
}