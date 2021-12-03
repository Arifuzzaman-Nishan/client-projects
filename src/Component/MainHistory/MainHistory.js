import React from 'react';
import { Table } from 'react-bootstrap';
import icon from '../../images/icon';
import './MainHistory.css';

const historyTabledata = [
    {
        token: icon,
        estApy: '50%',
        duration: '30 days',
        stackingRewards: '0 SCT',
        action: ["Harvest","Stack Now","Unstake"]
    },
    {
        token: icon,
        estApy: '50%',
        duration: '30 days',
        stackingRewards: '0 SCT',
        action: ["Harvest","Stack Now","Unstake"]
    },
    {
        token: icon,
        estApy: '50%',
        duration: '30 days',
        stackingRewards: '0 SCT',
        action: ["Harvest","Stack Now","Unstake"]
    },
    // {
    //     token: icon,
    //     estApy: '50%',
    //     duration: '30 days',
    //     stackingRewards: '0 SCT',
    //     action: ["Harvest","Stack Now","Unstake"]
    // },
    // {
    //     token: icon,
    //     estApy: '50%',
    //     duration: '30 days',
    //     stackingRewards: '0 SCT',
    //     action: ["Harvest","Stack Now","Unstake"]
    // },
    // {
    //     token: icon,
    //     estApy: '50%',
    //     duration: '30 days',
    //     stackingRewards: '0 SCT',
    //     action: ["Harvest","Stack Now","Unstake"]
    // },
    
]

export default function MainHistory() {
    return (
        <div >
            <h4 className='text-white'>History</h4>
            <Table className="table table-borderless table-condensed">
                <thead>
                    <tr className='text-white'>
                        <th>Tokens</th>
                        <th>Est. APY</th>
                        <th>Duration</th>
                        <th>Stacking Rewards</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyTabledata.map((item,index) => (
                            <tr className='text-white'>
                                <td>
                                    <img style={{width:"2rem"}} src={item.token} alt="" />
                                </td>
                                <td>
                                    {item.estApy}
                                </td>
                                <td>
                                    {item.duration}
                                </td>
                                <td>
                                    {item.stackingRewards}
                                </td>
                                <td>
                                    <button 
                                    style={{background:'#1F86FF'}}
                                    className="btn me-5 text-white">Harvest</button>

                                    <button 
                                    style={{background:'#403EAD'}}
                                    className="btn me-5 text-white">Stack Now</button>

                                    <button 
                                    style={{background:'#FF5F5F'}}
                                    className="btn text-white">Unstake</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
