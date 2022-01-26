var cars = {
    wheelNumbers: 4,
    colours: ['blue','green','yellow','white'],
    price: {
        ferrari: 100000,
        fiat: 500
    },
    isFun: true,
    engineStart: function() {
        console.log('vroom vroom');
    },
    myBudget: 'a tenner'

}

var isDriving = cars.engineStart();
