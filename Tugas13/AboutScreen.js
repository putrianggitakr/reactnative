import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default function AboutScreen(){
    
        return(
            <View style={styles.container}>
               <View style={styles.header}>
                   <View style={styles.subHeader}>
                       <View style={styles.subContentHeader}>
                            <Image 
                                style={styles.avatarArrow}
                                source={require('./asset/arrow_back_ios.png')}
                            />
                            <Text style={styles.titleName}>About</Text>
                       </View>
                    </View> 
                </View>
                <View style={styles.content}>
                    <Image 
                    style={styles.foto}
                    source={require('./asset/Ellipse36.png')}
                    />
                        <View style={styles.nama}>
                            <Text style={styles.textStyle}>Putri Anggita Kristianti</Text>
                            <Text style={{fontSize:12}}>anggita314@gmail.com</Text>
                        </View>
                </View >
                    <View style={{paddingHorizontal:10}}>
                        <Text style={styles.textStyle}>Portofolio</Text>
                    </View>
                    <View style={styles.gambarPortofolio}>
                        <Image 
                        source={require('./asset/GitHub.png')}
                        />
                        <Image
                        source={require('./asset/Gitlab.png')}/>
                    </View>
                        <View style={styles.gambarPortofolio}>
                            <Text>@putrianggitak</Text>
                            <Text>@anggita314</Text>
                        </View>
                    <View style={{paddingHorizontal:10, paddingVertical:20}}>
                        <Text style={styles.textStyle}>Kontak</Text>
                    </View>    
                    <View style={styles.kontak}>

                    <View style={styles.gambarPortofolio}>
                        <Image 
                        source={require('./asset/facebook.png')}
                        />
                        <Image
                        source={require('./asset/Twitter.png')}/>
                        
                    </View>
                    <View style={styles.gambarPortofolio}>
                            <Text>Putri Anggita</Text>
                            <Text>@putrianggitakr</Text>
                        </View>
                    </View>
                    <View style={styles.gambarPortofolio}>
                        <Image
                            source={require('./asset/Instagram.png')}
                        />
                        <Image
                            source={require('./asset/Google.png')}
                        />

                    </View>
                    <View style={styles.gambarPortofolio}>
                            <Text>@putrianggitakr</Text>
                            <Text>anggita314@gmail.com</Text>
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
       justifyContent:"center",
       paddingVertical:20,
       alignItems:"center",
   },
   foto:{
       width:100,
       height:100
   },
   nama:{
       marginTop:20,
       justifyContent:"space-between",
       alignItems:"center"
   },
   textStyle:{
   fontSize:18,
   fontWeight:"bold",
   color:"#575757"
   },
   gambarPortofolio:{
       flexDirection:"row",
       justifyContent:"space-around",
       alignItems: "center",
       paddingHorizontal:20,
       marginTop:10,
   }
})