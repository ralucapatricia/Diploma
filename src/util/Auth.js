import axios from 'axios';

const API_KEY = 'AIzaSyCpbVWjGldWk3DG8Pn3zUPjw5_LunmIPeI';

export default async function CreateUsers(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, 
    {
        email: email,
        password: password,
        returnSecureToken: true
    });
}