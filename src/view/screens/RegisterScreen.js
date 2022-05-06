import React ,{useState} from 'react';
import { View  } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles from '../../consts/styles';
import {auth} from '../../../firebase';

const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const register=()=>{
        auth.createUserWithEmailAndPassword
        (email,password)
            .then((userCredential)=>{
                var user=userCredential.user;
                //kayıt olduğu yer.
                    user.updateProfile({
                        displayName:name,
                        photoURL:imageUrl? imageUrl:"https://www.trackergps.com/canvas/images/icons/avatar.jpg"
                }).then(function() {
                    //update succesfull
                }).catch(function(error){
                    //error olursa burası çalısır
                });
                navigation.popToTop();
            })
            .catch((error)=>{
               
                var errorMessage=error.message;
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <Input placeholder="isim gir"
            label="Name"
            leftIcon={{type:'material',name:'badge'}}
            value={name}
            onChangeText={text =>setName(text)} />

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

            <Input placeholder="image url gir"
            label="image"
            leftIcon={{type:'material',name:'face'}}
            value={imageUrl}
            onChangeText={text =>setimageUrl(text)} />

            <View style={styles.btn}>
            
            <Button onPress={register} title ="Kayıt Ol"/>
            </View>
            

        </View>
    )
}

export default RegisterScreen;


    
  
