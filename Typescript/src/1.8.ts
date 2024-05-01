// destructure

const m = {
    age: "27",
    Name: {
        firstName: "nill",
        lastName: "roy"

    },
    Contacts: "0172222220"

}

const {age, Name: {lastName}} = m;



const myfriend = ['jack0', 'jack1', 'jack2', 'jack']

const [, goodJack , ...rest] = myfriend;