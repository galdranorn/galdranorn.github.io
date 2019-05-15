import React from 'react';
import './Portfolio.scss';

export class Portfolio extends React.Component {
    createLine() {
    }

    render() {
        return (
            <div id='Portfolio' className='Portfolio'>
                <h1 className='Portfolio-header'>
                    Portfolio
                </h1>
                <div className='container Portfolio-projects'>
                    <div className='row Portfolio-projects--line'>
                        <div className='col-6 bordered'>
                        {/* project 1 */}
                            <div className='row'>
                                <div className='col-8 Portfolio-projects--line-text'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                                <div className='col-4 Portfolio-projects--line-element bg-1'></div>
                            </div>
                        </div>
                        <div className='col-6 hgt moved'>
                        {/* project 2 */}
                            <div className="row">
                                <div className='col-4 Portfolio-projects--line-element bg-2 moved'></div>
                                <div className='col-8 Portfolio-projects--line-text moved'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='row Portfolio-projects--line'>
                        <div className='col-6 bordered'>
                        {/* project 3 */}
                            <div className='row'>
                                <div className='col-8 Portfolio-projects--line-text'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                                <div className='col-4 Portfolio-projects--line-element bg-3'></div>
                            </div>
                        </div>
                        <div className='col-6 hgt moved'>
                        {/* project 4 */}
                            <div className="row">
                                <div className='col-4 Portfolio-projects--line-element bg-4 moved'></div>
                                <div className='col-8 Portfolio-projects--line-text moved'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='row Portfolio-projects--line'>
                        <div className='col-6 bordered'>
                        {/* project 5 */}
                            <div className='row'>
                                <div className='col-8 Portfolio-projects--line-text'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                                <div className='col-4 Portfolio-projects--line-element bg-1'></div>
                            </div>
                        </div>
                        <div className='col-6 hgt moved'>
                        {/* project 6 */}
                            <div className="row">
                                <div className='col-4 Portfolio-projects--line-element bg-1 moved'></div>
                                <div className='col-8 Portfolio-projects--line-text moved'><p className="Portfolio-projects--line-text-header">Golden project</p><p>askjhd asjdhaskjd skjdhad kjsahdkjsahd jashdkjsa</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}