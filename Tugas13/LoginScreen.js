import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView, FlatList, Button} from 'react-native';

export default function LoginScreen(){
    const [email, onChangeEmail] = React.useState("Email");
    const [password, onChangePassword] = React.useState("Password");    
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                   <View style={styles.subHeader}>
                       <View style={styles.subContentHeader}>
                            <Image 
                                style={styles.avatarArrow}
                                source={require('./asset/arrow_back_ios.png')}
                            />
                            <Text style={styles.titleName}>Login</Text>
                       </View>
                           
                    </View> 
                </View>
                <View style={styles.content}>
                    <Image 
                    style={styles.logo}
                    source={require('./asset/logo.png')}
                    />
                        <SafeAreaView>
                        <View>
                            <Image
                            style={styles.avatarMail}
                            source={require('./asset/Group1.png')}
                            />
                            
                            <TextInput
                                style={styles.email}
                                onChangeText={onChangeEmail}
                                value={email}>
                                    
                            </TextInput>
                        </View>
                        <View>
                            <Image
                            style={styles.avatarPassword}
                            source={require('./asset/Group2.png')}
                            />
                            <TextInput
                                style={styles.password}
                                onChangeText={onChangePassword}
                                value={password}> 
                            </TextInput>
                         
                        </View>
                        </SafeAreaView>
                        <View style={styles.bagianBawah}>
                        <Button
                        title="Login"
                        color="#9370db"
                        
                        onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Text style={styles.textBawah}>or</Text>
                </View> 
                    <View style={styles.signup}></View>
                    <Text>Signup with social media account</Text> 
                    <Image
                            style={styles.logososmed}
                            source={require('./asset/Logososmed.png')}
                            />          
                </View>
               <View style={styles.bottom}>
                    <Text style={styles.textSignup}>Do not have account? Create Account</Text>
               </View>
            </View>
            
        )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: 'white'
    },
    header:{
        height: 50,
        backgroundColor: 'white',
        marginTop: 30,
        justifyContent: 'center'
    },
    subHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        justifyContent:'space-between'

    },
    subContentHeader:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    avatarArrow:{
        height: 15,
        width: 20
    },
    titleName:{
        fontSize: 20,
        paddingLeft: 20

    },
    content:{
        flexDirection:'column',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    email: {
        width: 285.89,
        height: 43,
        top: 47,
        borderWidth: 1,
        padding: 10,
        borderColor:'#2F2F2F',
        borderRadius: 5
    },
    avatarMail:{
        top: 78,
        left: 250
    },
    password:{
        width: 285.89,
        height: 43,
        top: 75,
        borderWidth: 1,
        padding: 10,
        color:'#2F2F2F',
        borderRadius: 5
    },
    avatarPassword:{
        top: 105,
        left: 250
    
    },
    bagianBawah:{
            flexDirection:'column',
            margin: 100,
            alignItems: 'center',
            justifyContent: 'center'
    },
    textBawah:{
        top:10,
        fontSize: 18,
        fontWeight: "400",
        marginBottom: 10
    },
    signup:{
        marginTop: -90

    },
    logososmed:{
        flexDirection:'column',
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom:{
        height:50,
        backgroundColor: '#9370db',
        justifyContent : 'center',
        paddingHorizontal: 40,
        marginTop:-10
        
    },
    textSignup:{
        fontSize: 16,
        fontWeight: "100",
        alignItems: 'center',
        color: 'white'
    }

})