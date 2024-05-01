{
    // union type and 

    type frontend = "fakibazDevloper" | "goodDeveloper"
    type fullDev = "fakibazDeveloper" | "Fullstack"
    const newDeveloper : frontend = "goodDeveloper"

    type FullDev = frontend | fullDev



    // intersection 
    type FullDeveloper = {
        frontends: string;
        fulldevs: string;
    }
    
    const newDev: FullDeveloper = {
        frontends: "fakibazDevloper",
        fulldevs: "Fullstack"
    };
    

}