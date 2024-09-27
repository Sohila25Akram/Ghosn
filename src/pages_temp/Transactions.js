import './../styles/Transactions.css'

export function Transactions(){
    return(
        <div className='container'>
            <div className='transactions-container'>
                <h2>Latest Transaction</h2>
                <div className='transactions-table-container'>
                    <table className='transactions-table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Transaction ID</th>
                                <th>Type</th>
                                <th>Card</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>
                                    <i className="ri-arrow-down-line"></i>
                                </td>
                                <td>#12548796</td>
                                <td>Transfered</td>
                                <td>1234 ****</td>
                                <td>28 Jan, 12.30 AM</td>
                                <td>
                                    <span>$2,500</span>
                                </td>
                                <td>
                                    <a href="/"  className='outline-button'>Download</a>
                                </td> */}
                                <TransactionOp />
                            </tr>        
                            <tr>
                                <TransactionOp />
                            </tr>            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export function TransactionOp(){
    return(
        <>
            <td>
                <i className="ri-arrow-down-line"></i>
                Any Name
            </td>
            <td>#12548796</td>
            <td>Transfered</td>
            <td>1234 ****</td>
            <td>28 Jan, 12.30 AM</td>
            <td>
                <span>$2,500</span>
            </td>
            <td>
                <a href="/"  className='outline-button'>Show</a>
            </td>
        </>
    )
}