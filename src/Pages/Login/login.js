import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRainbow } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input';
class Login extends Component{
    render(){
        return(
            
        <div>
            <FontAwesomeIcon icon={faRainbow}/>
            <span>Coffee</span>
            <Input/>
        </div>
        );
    }
}
export default Login;