import React from "react";
import "./List.css";
import ScrollArea from 'react-scrollbar'
import amount from '../../../assets/img/amount.png'

 const List = props => {

    return (
        <div>
            <ScrollArea
        speed={0.8}
        className="area"
        horizontal={false}
        >
       <div className="list_container">
            {props.transactions.map((transaction, index) =>
              <div className="list_item" key={index}>
                <p>id: {transaction.id}</p> <p>bank: {transaction.bankId}</p> <p><img className="amount" src={amount} />{transaction.amount}</p> 
                <button onClick={() => props.deleteTransactionById(transaction.id)} className='delete' >Delete</button>{' '}
              </div>)}
        </div>
      </ScrollArea>
        </div>
        
      
    );
};



export default List;
