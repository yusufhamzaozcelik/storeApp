import React ,{useState,useEffect} from 'react';
import { View  } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from '../../consts/styles';
import {auth} from '../../../firebase';
const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const signIn=()=>{
        auth.signInWithEmailAndPassword(email,password)
        .catch((error)=>{

            var errorMessage=error.message;
            alert(errorMessage)
        });
    }
    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged
        (function (user){
            if(user){
              navigation.replace('Home');
            }else{
                
                navigation.canGoBack()&&navigation.popToTop();
            }
        });
        return unsubscribe 
        
    }, [])
    return (
        <View style={styles.container}>
            <Input placeholder="email gir"
            label="Email"
            leftIcon={{type:'material',name:'email'}}
            value={email}
            onChangeText={text =>setEmail(text)} />

            <Input placeholder="şifre gir"
            label="password"
            leftIcon={{type:'material',name:'lock'}}
            value={password}
            onChangeText={text =>setpassword(text)}
            secureTextEntry />

            <View style={styles.btn}>
            <Button  title ="Giriş Yap" onPress={signIn} />
            <Button title ="Kayıt Ol"onPress={()=>navigation.navigate('Register')}/>
            </View>
            {/* burdaki register app.jsnin içindeki stacktaki register */}

        </View>
    )
}

export default LoginScreen;


    
  
