import React, { useEffect, useState } from 'react'
import './Transaction.css'
function Transaction() {
    const[tdata,setTdata]=useState([]);
    const[amount,setAmount]=useState('')
    const[type,setType]=useState('expense')
    const[description,setDescription]=useState('')

    useEffect(()=>{
      const storedDetails=localStorage.getItem('transactionDetails');
      if(storedDetails)
      {
          setTdata(JSON.parse(storedDetails))
      }
  },[])
 

    useEffect(()=>{
        if(tdata.length>0){
        localStorage.setItem('transactionDetails',JSON.stringify(tdata))
        }
    },[tdata])

  

    const handleSubmit=(e)=>{
      e.preventDefault();

      if(!amount || !description) return;

      const newTransaction={
        amount:parseFloat(amount),
        type,
        description,
        date:new Date().toLocaleString()
      }

      setTdata([newTransaction, ...tdata ]);

      setAmount('');
      setType('expense');
      setDescription('')
    }


    const income=tdata.filter((t)=>t.type==='income').reduce((sum,t)=>sum+t.amount,0);
    const expense=tdata.filter((t)=>t.type==='expense').reduce((sum,t)=>sum+t.amount,0)
    const balance=income-expense;

  return (
    
  
    <div className='display-container'>
        <h2>Expense Tracker</h2>
        <div className='summary'>
        <p><strong>Balance : </strong>{balance.toFixed(2)}</p>
        <p  className='income'><strong>Income : </strong>{income.toFixed(2)}</p>
        <p className='expense'><strong>Expense : </strong>{expense.toFixed(2)}</p>
        </div>


        <form onSubmit={handleSubmit} className='form-container'>
            
            <input 
            type='number'
            value={amount}
            placeholder='Amount'
            onChange={(e)=>setAmount(e.target.value)}
            />

            <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value='income'>income</option>
                <option value="expense">expense</option>
            </select>
            
            <input 
            type='text' 
            value={description}
            placeholder='description'
            onChange={(e)=>setDescription(e.target.value)}/>

            <button id='btn' type='submit'>Add</button>

       </form>

        {tdata.length>0?(
          <table  className='table-container'>
            <thead>
            <tr>
             <th>Amount</th>
             <th>Type</th>
             <th>Description</th>
             <th>Date</th>
             </tr>
            </thead>
            <tbody>

              { tdata.map((item,index)=>(
                     <tr key={index}>
                  
                        <td>{item.amount}</td>
                        <td>{item.type}</td>
                        <td>{item.description}</td>
                        <td>{item.date}</td>
                      </tr>
                ))
              }
            
            </tbody>
          </table>
        ):(
          <p>NO Transaction Found</p>
        )

        }

    </div>
  )
}

export default Transaction