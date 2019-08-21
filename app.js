// usually the data will come from an api - here it's hardcoded and i will replace it later
const data = [
    {
        name: 'Bengal Tiger',
        age: 33,
        gender: 'male',
        lookingfor: 'female',
        location: 'India',
        image: './images/tiger.jpg'
    },
    {
        name: 'Cute Kitten',
        age: 1,
        gender: 'male',
        lookingfor: 'male',
        location: 'England',
        image: './images/cat.jpg'
    },
    {
        name: 'JohnJohn macaque',
        age: 6,
        gender: 'male',
        lookingfor: 'female',
        location: 'Congo',
        image: './images/macaque.jpg'
    },
    {
        name: 'Max Lion',
        age: 11,
        gender: 'male',
        lookingfor: 'female',
        location: 'South Africa',
        image: './images/lion.jpg'
    },
    {
        name: 'Sarah Antelope',
        age: 3,
        gender: 'female',
        lookingfor: 'female',
        location: 'Peru',
        image: './images/antelope.jpg'
    },
    {
        name: 'Dori Drara',
        age: 5,
        gender: 'male',
        lookingfor: 'female',
        location: 'Tel Aviv',
        image: './images/drara.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" alt="${currentProfile.name}">`;
    } else {
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : {done: true};
        }
    }
}