import React from 'react'
import { View, Text,SafeAreaView,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DetailScreen = ({navigation,route}) => {
    const products=route.params;//bir önceki sayfadan gelen ürün bilgilerini atıyoruz.
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()}/>
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={styles.image}>
                <Image source={products.img} style={{resizeMode:'contain',flex:1}} />
            </View>

            <View style={styles.detailsContainer}>
                <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}> 
                    <View style={styles.line}/>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Best Choice</Text>
                    
                </View>

                <View style={{marginLeft:20,marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:22}}>{products.name}</Text>
                    <View style={styles.priceTag}><Text style={{fontSize:16,fontWeight:'bold',color:COLORS.white,}}>{products.price}</Text></View>
                </View>

                <View style={{paddingHorizontal:20,marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}> ABOUT </Text>
                    <Text style={{color:'grey',fontSize:14,lineHeight:22,marginTop:20}}> {products.about} </Text>
                    <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.brderButton}>
                                    <Text style={styles.borderBtnText}>-</Text>
                                    
                                </View>
                                <Text style={{fontSize:20,marginHorizontal:10,fontWeight:'bold'}}>1</Text>
                                <View style={styles.brderButton}>
                                    <Text style={styles.borderBtnText}>+</Text>
                                </View>

                                <View style={styles.buyButton}>
                                    <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:18}}>Buy</Text>
                                    
                                </View>
                                <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
                                <View style={styles.chatButton} >
                                    <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:18}}>Chat</Text>
                                    
                                </View>
                                </TouchableOpacity>

                        </View>
                    </View>
                </View>
                  
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({

    header:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:COLORS.light,
        marginBottom:7,
        borderRadius:20,
        paddingTop:30,
        marginTop:30,
        marginHorizontal:7
    },
    line:{
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
    },
    priceTag:{
        backgroundColor:COLORS.green,
        width:80,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    brderButton:{
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    borderBtnText:{
        fontSize:28,
        fontWeight:'bold'
    },
    buyButton:{
        backgroundColor:COLORS.green,
        width:75,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginLeft:30
    },
    chatButton:{
        backgroundColor:COLORS.green,
        width:75,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginLeft:5
    }
});

export default DetailScreen
