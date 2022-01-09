// Use this sample to create your own voice commands
const recipe = [
    {name: 'breakfast', id: 'breakfast'},
    {name: 'lunch', id:'lunch'},
    {name: 'dinner', id: 'dinner'},
    {name: 'dessert', id: 'dessert'}
];

const breakfast = [
    {name: 'pancake', id: 'pancake'},
    {name: 'cereal', id:'cereal'},
    {name: 'omelette', id: 'omelette'}
];

const lunch = [
    {name: 'sandwich', id: 'sandwich'},
    {name: 'pizza', id: 'pizza'},
    {name: 'pasta', id: 'pasta'}
];

const dessert = [
    {name: 'cake', id: 'cake'},
    {name: 'brownie', id: 'brownie'},
    {name: 'pie', id: 'pie'}
];

let recipePattern = recipe.map(item => '${item.name}').join('|');
let breakfastPattern = breakfast.map(item => '${item.name}').join('|');
let lunchPattern = dessert.map(item => '${item.name}').join('|');
let dessertPattern = dessert.map(item => '${item.name}').join('|');
console.log(breakfastPattern, lunchPattern, dessertPattern);

intent('What recipes do you have?','What do you have?','What can I get here?', 'List out the recipes','Recipes', p => {
    p.play('We have:');
    for (let i = 0; i < recipe.length; i++) {
    let item = recipe[i].name;
    p.play(`${item}`);
}
    p.play('What meal would you like a recipe for?');
});

intent('Tell me the breakfast recipes','Breakfast', p => {
    p.play('Today, We have:','Sure, for today','Alright, for today');
    for (let i = 0; i < breakfast.length; i++) {
    let item = breakfast[i].name;
    p.play(`${item}`);
}
    p.play('which breakfast would you like a recipe for?');
});

intent('$(BREAKFAST pancake|cereal|omellete)', reply('got it, I will send you a $(BREAKFAST pancake|cereal|omellete) recipe. Please check your chats for an update, thank you'));

intent('Tell me the lunch recipes','Lunch', p => {
    p.play('today, We have:','Sure, for today','Alright, for today');
    for (let i = 0; i < lunch.length; i++) {
    let item = lunch[i].name;
    p.play(`${item}`);
}
    p.play('which lunch would you like a recipe for?');
});

intent('$(LUNCH sandwich|pizza|pasta)', reply('got it, I will send you a $(LUNCH sandwich|pizza|pasta) recipe. Please check your chats for an update, thank you'));

intent('Tell me the dessert recipes','Dessert', p => {
    p.play('today, We have:','Sure, for today','Alright, for today');
    for (let i = 0; i < dessert.length; i++) {
    let item = dessert[i].name;
    p.play(`${item}`);
}
    p.play('which dessert would you like a recipe for?');
});

intent('$(DESSERT cake|brownie|pie)', reply('got it, I will send you a $(DESSERT cake|brownie|pie) recipe. Please check your chats for an update, thank you'));
