document.write("<h1>Завдання 18</h1>");

styles = ["Jazz", "Blues"];
document.write("<p>Масив на етапі 1: " + styles + "</p>");

styles.push("Rock-n-Roll");
document.write("<p>Масив на етапі 2: " + styles + "</p>");

const median = Math.floor(styles.length / 2);
styles[median] = "Classics";
document.write("<p>Масив на етапі 3: " + styles + "</p>");

document.write("<p>Видалено: " + styles.shift() + "</p>");
document.write("<p>Масив на етапі 4: " + styles + "</p>");

styles.unshift("Rap", "Reggae");
document.write("<p>Масив на етапі 5: " + styles + "</p>");