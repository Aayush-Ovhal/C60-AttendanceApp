import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class Marksheet extends React.Component{

    constructor(){
        super();
        this.state={
            allStudents: [],
            studentName: "",
            rollNo: 1,
            allRollNo: [],
            docId: ""
        }
    }

    getStudentsName=()=>{
      db.collection("students")
      .onSnapshot((snapshot)=>{
          var studentsRef = snapshot.docs.map((doc) => doc.data())
          var rollNoRef = snapshot.docs.map((doc) => doc.data())
          this.setState({
              allStudents: studentsRef,
              allRollNo: rollNoRef
          })
      })
    }
    updateStudentName=()=>{
        
        db.collection("students").add({
            "name": this.state.studentName,
            "status": "",
            "roll_no": this.state.rollNo
        })

        this.setState({
            rollNo: this.state.rollNo+1
        })
    }

    updateStatus=(status)=>{
        var refStatus = status
         db.collection("students").where("roll_no", "==", this.state.rollNo).get()
         .then((snapshot)=>{
             snapshot.forEach((doc)=>{
              this.setState({
                  studentName: doc.data().name
              })
              console.log(this.state.studentName)
             })
         })
    }

    componentDidMount(){
        this.getStudentsName()
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item, i})=>{
        return(
            <ListItem
             key={i}
             title={item.name}
             subtitle={item.roll_no}
             titleStyle={{ color: 'black', fontWeight: 'bold' }}
             bottomDivider
            />
        )
    }

    render(){
        return(
         <SafeAreaProvider>
            <View style={{flex:1}}>
                <Header
                 centerComponent={{text: "Attendance Sheet", style:{fontSize: 30, color: "#0036C7", fontFamily: "forte", fontWeight: 'bold'}}}
                 backgroundColor="#4B79F9"
                />
                    <TextInput
                     placeholder="Enter name of student(Required only once)"
                     style={styles.InputStyle}
                     onChangeText={
                      (text)=>{
                       this.setState({
                           studentName: text
                       })
                      }}
                    />
    
                    <TouchableOpacity 
                     style={styles.addName}
                     onPress={this.updateStudentName}>
                        <Text>
                            Add Name
                        </Text>
                    </TouchableOpacity>

                <FlatList
                data={this.state.allStudents}
                renderItem={({item})=>(
                <View style={{borderBottomWidth: 0.5}}>
                 <Text style={{fontWeight: 'bold', fontFamily:'forte', fontSize: 20}}>{item.roll_no} {item.name}</Text>
                 <TouchableOpacity 
                 style={styles.Present}
                 onPress={()=>{console.log("Present")}}>
                     <Text>
                         Present
                     </Text>
                 </TouchableOpacity>

                 <TouchableOpacity 
                 style={styles.Absent}
                 onPress={()=>{console.log("Absent")}}>
                     <Text>
                         Absent
                     </Text>
                 </TouchableOpacity>
                </View>
              )}
               keyExtractor= {(item, index)=> index.toString()}
              />
             </View>
         </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    Present: {
        backgroundColor: "#25B26F",
        marginLeft: 1300,
        height: 25,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    Absent: {
        backgroundColor: "#B21B05",
        marginLeft: 1400,
        height: 25,
        width: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    InputStyle: {
        height: 30,
        width: 500,
        borderWidth: 2,
        borderRadius: 2,
        marginLeft: 500,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    addName: {
        marginLeft: 500,
        backgroundColor: "#A3AABF",
        width: 80,
        height: 30,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: "#7B89A6",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 1
    }
})