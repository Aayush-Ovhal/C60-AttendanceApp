import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';

export default class finalAttendance extends React.Component{
 render(){
     return(
         <SafeAreaProvider>
         <View style = {{flex: 1}}>
             <Header
              centerComponent={{text: "Final Sheet", style:{fontSize: 20, color: "#0036C7", fontStyle: "forte"}}}
              backgroundColor="#4B79F9"
             />
             <View style={{flex: 1}}>
             <Text>
                 Final Attendance
             </Text>
             </View>
         </View>
         </SafeAreaProvider>
     )
 }
}