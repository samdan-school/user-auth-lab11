// eslint-disable-next-line
import React from 'react';

export default function Logout(props) {
    // token ustgah
    localStorage.removeItem('token')
   props.history.push("/home");
   return null;
}
