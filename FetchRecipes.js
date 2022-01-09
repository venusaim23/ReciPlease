const BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

projectAPI.fetchDishes = function(p, param, callback) {
    p.userData.nameOfDish = param.dishName;
    const request_url = `${BASE_URL}search.php?s=${p.userData.nameOfDish}`;
    api.axios.get(request_url)
        .then((response) => {
            console.log(response.data);
            let data = response.data;
            p.play('Data fetched');
            p.play({command:'fetch_details', data});
        })
        .catch((error) => {
            console.log(error);
            p.play('Could not get weather information');
        });
}

intent('Search for $(DISH_NAME* (.+))', p => {
    const request_url = `${BASE_URL}search.php?s=${p.DISH_NAME.value}`;
    api.axios.get(request_url)
        .then((response) => {
            console.log(response.data);
            let data = response.data;
            p.play('Data fetched');
        })
        .catch((error) => {
            console.log(error);
            p.play('Could not get weather information');
        });
});