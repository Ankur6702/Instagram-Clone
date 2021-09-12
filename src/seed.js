export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'nSixfmNGDHNpwShYJR9JwZwQrvR2',
            username: 'ankur',
            fullName: 'Ankur Agarwal',
            emailAddress: 'ankur@agarwal.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'michael',
            fullName: 'Michael Haeden',
            emailAddress: 'michael@haeden.com',
            following: [],
            followers: ['nSixfmNGDHNpwShYJR9JwZwQrvR2'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'devil',
            fullName: 'Sailor Devil',
            emailAddress: 'sailor@devil.com',
            following: [],
            followers: ['nSixfmNGDHNpwShYJR9JwZwQrvR2'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'mr_ankur',
            fullName: 'Ankur Agarwal',
            emailAddress: 'ankur@code.com',
            following: [],
            followers: ['nSixfmNGDHNpwShYJR9JwZwQrvR2'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [
                    {
                        displayName: 'devil',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'michael',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
    }
}
