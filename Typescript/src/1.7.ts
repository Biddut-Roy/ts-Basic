{
    // Rest and spread operator

    const bros1 : string[] = ['sree',"biddut","roy"]
    const bros2 : string[] = ['sree',"Nill","roy"]

    bros1.push(...bros2)



    // explain rest operator


    const list =  (...friends: string[]) =>{
        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))   
    }

    list('sree','nill','roy')

    


}