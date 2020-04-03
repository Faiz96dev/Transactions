import React from "react";
import "./List.css";
import Button from 'react-bootstrap/Button'
import ScrollArea from 'react-scrollbar'



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
                <p>id: {transaction.id}</p> <p>bank: {transaction.bankId}</p> <p>amount: {transaction.amount}</p> 
                <Button onClick={() => props.deleteTransactionById(transaction.id)} variant="info">Delete</Button>{' '}
              </div>)}
        </div>
      </ScrollArea>
        </div>
        
      
    );
};



export default List;
