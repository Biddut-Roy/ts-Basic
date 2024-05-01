// Object  >> Reference type

const user : {
    firstName: string;
    middleName?: string;            //Optional Type
    LastName: string;
    // CompanyName: string;
    readonly CompanyName: 'Start a jack';       // literal type
} = {
    firstName: "Nill",
    middleName: "",
    LastName: "Roy",
    CompanyName: "Start a jack"
}

user.CompanyName = "Start"