// axios bichih heseg
import axios from 'axios';

export function signup(body, cb, eb) {
    // axios post post ywuulah 
    // url: /users/ 
    // return token butsaj irne
    axios.post('http://localhost:3000/users', body)
    .then (d => cb(d))
    .catch(err => eb(err))
}

// login hiih
// url get /users 

// login hiisnii daraa uuriin medeelelee awna 
// url get /users/me
export function myInfo(cb, eb) {
    axios.get('http://localhost:3000/users/me', {
        headers: { 'x-auth': localStorage.getItem('token') },
    })
    .then(res => cb(res))
    .catch(err => eb(err));
}