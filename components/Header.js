import * as React from 'react';
import {Header} from 'react-native-elements';

const CustomHeader = (title)=>{
    return(
        <Header
         centerComponent={{text: title, style:{color: "#0036C7", fontSize:20, fontWeight: "bold"}}}
         backgroundColor = "#4B79F9"
        />
    )
}

export default CustomHeader;