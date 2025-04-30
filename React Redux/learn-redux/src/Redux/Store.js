

    // STORE --- GLOBALIZED STATE , IT CONTAINS ALL THE DATA NEEDED FOR THE APPLICATION

    //ACTION --> IT DESCRIBE THE ACTION WHAT WE WANT TO DO (EX:INCREMENT), 
    //           IT IS FUNCTION WHICH CREATES  A OBJECT

    const increment=()=>{
        return{
            type:"INCREMENT"
        }
    }

    const decrement=()=>{
        return{
            type:"DECREMENT"
        }
    }


    //REDUCER --> IT DESCRIBE HOW ACTION TRANSFORMS THE STATE INTO NEXT STATE , 
    //            IT IS ALSO A ARROW FUNCTION WHICH RETURN OBJECT

    const counter=(state=0, action)=>{
        switch(action.type)
        {
            case "INCREMENT":
                return state+1;
            
            case "DECREMENT":
                return state-1;
        }

    }

    let store=createStore(counter)

    //display in console
      store.subscribe(()=>console.log(store.getState()));


    //DISPATCH --> IT IS WHERE WE EXECUTE THE ACTION
    store.dispatch(increment)


