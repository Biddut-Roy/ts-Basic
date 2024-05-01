{
    const age : number = 15
     if( age > 18){
        console.log(" adult ")
        
      } else{
        console.log("child")
        
      }

      const isOld = age >= 18 ? "Adult" : "Child"
      console.log({isOld});


      //  Nullish Coalescing Operator
      
      const nu = null;

      const result = nu?? "joker"
      const results = nu? "joker-man" : "joker"
      console.log(result , results);


      //Optional Operator
      interface Person {
        name?: string;
        age?: number;
        address?: {
          city?: string;
          postalCode?: string;
        };
      }
      
      const person: Person = {
        name: "John",
        age: 30,

      };
      
      const citySafe = person.address?.city?? "Does not exit" 
      
      console.log(citySafe); 
      
}