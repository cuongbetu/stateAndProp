import React from 'react';
import Button from '../Button';
//stateless ~~ function es6
// const Input = () => (
    // <div>
    //     <input type='text' placeholder='username'/>
    //     <Button/>
    // </div>
// );


//statefull ~~ class component
class Input extends React.Component {
    render(){
        return (
            <div>
                <input type='text' placeholder='username'/>
                <Button/>
            </div>
        );
    }
}
export default Input;