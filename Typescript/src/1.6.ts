// Function

function add(v1: number, v2: number):number {
return v1 + v2;
}

add(1,4);


const addArrow = (v1: number, v2: number):number => v1 + v2;

const poorUser = {
    name: "Nill",
    balance: 0,
    addMonet(balance: number): number{
        return this.balance + balance
    }
}

const arr: number[] = [1,2,3,4,5,6,7,8,9]

const newArray: number[] = arr.map((elm : number): number => elm + elm)