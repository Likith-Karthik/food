import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer PeRiAaSiXD5u6gLUh530xMfl7dGQptUB3PW1hT_UeROpV4jGBtqfqTxNTaj4HfpNLUNuvM4fE4I1lWTlq7AIa6hQuqMM47JaN-TnhIajEr09EzpUc1oYsBzGV9WnX3Yx'

    }
});

