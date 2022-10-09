document.write("<h1>Завдання 24</h1>");

function groupById(users) {
    return users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  

document.write("<p style=\"font-weight: bold; font-size: 18px;\">Дано масив:</p>");
for(let i = 0; i < users.length; i++){
    document.write("<p>id: " + users[i].id + "<br>name:" + users[i].name + "<br>age:" +  users[i].age + "</p>");
}

let usersById = groupById(users);
 
document.write("<p style=\"font-weight: bold; font-size: 18px;\">Результат:</p>");
for(let i = 0; i < users.length; i++){
    document.write("<p>" + usersById[users[i].id].id + ": {id: " + usersById[users[i].id].id + ", name: " + usersById[users[i].id].name + ", age: " + usersById[users[i].id].age + "}</p>");
}