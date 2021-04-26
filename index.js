function wakeDog(name, breed) {
    const message = `Wake ${name} the ${breed}`;
    console.log(message);
    return message;
};

function leashDog(name, breed) {
    const message = `Leash ${name} the ${breed}`;
    console.log(message);
    return message;
};

function walkToPark(name, breed) {
    const message = `Walk to the park with ${name} the ${breed}`;
    console.log(message);
    return message;
};

function throwFrisbee(name, breed) {
    const message = `Throw the frisbee for ${name} the ${breed}`;
    console.log(message);
    return message;
};

function walkHome(name, breed) {
    const message = `Walk home with ${name} the ${breed}`;
    console.log(message);
    return message;
};

function unleashDog(name, breed) {
    const message = `Unleash ${name} the ${breed}`;
    console.log(message);
    return message;
};

    const routine  = [wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog];

    function exerciseDog(name, dog_breed)
    {
        const new_array = [];
        for(let i = 0; i < routine.length; i ++)
        {
            new_array.push(routine[i](name, dog_breed));
        };
        return new_array;
    };

    exerciseDog("Ronnie", "amazing dog")