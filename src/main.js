document.write('API - Using Axios and Async / Await<br><br><br>');
//
//
// Crição de API utilizando o Axios e Async/Await
//
//
import axios from 'axios';

class Api {
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);
    
        console.log(response);

//document.write(response);
    }
}

Api.getUserInfo('viannaandreBR');
