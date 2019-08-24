//document.write('API - Using Axios and Async / Await<br><br><br>');
console.log('Método Try/Catch(errr)');
//
//
// Crição de API utilizando o Axios e Async/Await
//
//
import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
        } catch (err) {
        console.warn('Erro na API');
        }

    }


}

Api.getUserInfo('viannaandreBR233');

Api.getUserInfo('viannaandreBR');

Api.getUserInfo('diego3g');