const axios = require('axios');
async function getUser() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
}
if (require.main === module) {
    getUser()
        .then(user => {
            console.log('User fetched successfully!');
            console.log(user.name);
            console.log(user.email);
        })
        .catch(error => {
            console.error(error.message);
            process.exitCode = 1;
        });
}

module.exports = getUser;
