import React from 'react';
import { View, Text ,StyleSheet,SafeAreaView, TextInput,TouchableOpacity,FlatList, Dimensions,Image} from 'react-native';
import products from '../../consts/product';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth ,db} from '../../../firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {

    const categories=['POPULER','ORGANIC','INDOORS','SYNTHETIC'];
    const [categoryIndex,setCategoryIndex]=React.useState(0)

    const signOut=()=>{

        auth.signOut().then(()=>{
            //burada çıkış başarılıysa logine döner
            navigation.replace('LoginScreen')
        }).catch((error)=>{

        });
    }
    const Card=({products})=>{
        return  (
            <TouchableOpacity onPress={()=>navigation.navigate("Details",products)}>
                <View style={styles.card}>

                <View style={{alignItems:'flex-end'}}>
                    <View style={{alignItems:'center',justifyContent:'center',borderRadius:15,width:30,height:30,
                     backgroundColor: products.like ? 'rgba(245,42,42,0.5)'
                   :'rgba(0,0,0,0.2)'}}>
                        <FontAwesome5 size ={18}name={'heart'} color={products.like ?COLORS.red: COLORS.dark}/>
                    </View>
                </View>
                <View style={{height:100,alignItems:'center',}}>
                        <Image style={{flex:1,resizeMode:'contain'}} source={products.img}/>
                </View>
                <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>{products.name}</Text>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>${products.price}</Text>
                    <View style={{height:25,width:25,backgroundColor:COLORS.green,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:19,fontWeight:'bold',}}>+</Text>
                    </View>
                </View>
          </View>
            </TouchableOpacity>
            
        );
    };
    const CategoryList=()=>{

        return (<View style={styles.category}>
            {categories.map((item,index)=>(
                <TouchableOpacity key ={item} activeOpacity={0.8} onPress={()=>setCategoryIndex(index)}>
                     <Text key={index} style={[styles.categoryText,categoryIndex==index&& styles.categoryTextSelected]}>{item}</Text>
                </TouchableOpacity>
           
            ))}
        </View>);
    };
    return (
        <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:COLORS.white}}>    
        <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={signOut}/>
            <View>
                
                 <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome To</Text>
                 <Text style={{fontWeight:'bold',fontSize:38,color:COLORS.green}}>Shop</Text>
            </View>
        <FontAwesome5 name={'shopping-cart'} size={29}/>    
        </View>
            <View style={{marginTop:30,flexDirection:'row'}}>

                <View style={styles.searchContainer}>
                     <FontAwesome5 name={'search'} size={25} style={{margin:10}}/>
                     <TextInput style={styles.input} placeholder="Search"/>
                </View>

                <View style={styles.sortBtn}><FontAwesome5 name={'sort'} size={30} color={COLORS.white}/></View>
            </View>
            <CategoryList/>
            <FlatList columnWrapperStyle={{justifyContent:'space-between'}}
             numColumns={2}
              data={products} 
              contentContainerStyle={{marginTop:10,paddingBottom:50}}
              renderItem={({item})=><Card products={item}/>}/>

        </SafeAreaView>
        
    );
};

const styles=StyleSheet.create({
    header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    },
    searchContainer:{
        height:50,
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        backgroundColor:COLORS.light,
        alignItems:'center'
    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        color:COLORS.dark,
        flex:1,
    },
    sortBtn:{
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor:COLORS.green,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10

    },
    category:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:30,
        marginBottom:30
    },
    categoryText:{
        fontSize:16,
        color:'grey',
        fontWeight:'bold',
    },
    categoryTextSelected:{
        color:COLORS.green,
        paddingBottom:5,
        borderColor:COLORS.green,
        borderBottomWidth:2,
    },
    card:{
        height:225,
        backgroundColor:COLORS.light,
        width:Dimensions.get("screen").width/2-30,
        borderRadius:10,
        marginBottom:20,
        padding:15,
        marginHorizontal:2,
    }
});
export default HomeScreen
