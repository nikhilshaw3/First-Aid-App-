import React, { Component } from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import MyHeader from '../components/MyHeader.js'
import { ListItem ,Icon} from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class NumberScreen extends Component{
render(){
return(
<SafeAreaProvider style={styles.view}>
<MyHeader title="Emergency Numbers" navigation={this.props.navigation}/>

<ScrollView>

<ListItem
title={"India - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Afghanistan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Bahrain - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Bangladesh - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Bhutan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Brunei - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Myanmar - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Cambodia - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"People's Republic of China - 120"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Christmas Island - 000"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Cocos Islands - 000"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"East Timor - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Hong Kong - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Indonesia - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Iran - 115"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Iraq - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Israel - 101"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Japan - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Jordan - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Kazakhstan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Kyrgyzstan - 103"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Democratic People's Republic of Korea - local numbers only"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Republic of Korea - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Kuwait - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Laos - 195"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Lebanon - 140"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Macau - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Cambodia - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Cambodia - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

</ScrollView>
</SafeAreaProvider>
)
}
}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    view:{
      flex: 1,
      backgroundColor: "white"
    },
    santaImage:{
        width:"70%",
        height:"40%",
        resizeMode:"stretch",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
      },
  });