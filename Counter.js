import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {useDispatch, useSelector} from 'react-redux'
import {tambahCounter, kurangCounter, hapusCounter} from './redux/action'

const Counter = () => {
    const dispatch= useDispatch();
    const counter = useSelector(data => data.counter)
    return (
        
        <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:'#808080'}}>
            
            <Text style={{fontSize:30,color:'yellow'}}> TUGAS PERTAMA PAM</Text>
            <Text>  </Text>
            <Text>  </Text>
            <Text>  </Text>
            <Text>  </Text>
            <TouchableOpacity style={{backgroundColor:'#ADD8E6',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(kurangCounter(counter))}>
                <Text style={{fontSize:30}}>Kurang</Text>
            </TouchableOpacity>
            <Text style={{fontSize:50,marginLeft:20,marginRight:20,color:'yellow'}}>{counter}</Text>
            <TouchableOpacity style={{backgroundColor:'#ADD8E6',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(tambahCounter(counter))}>
                <Text style={{fontSize:30}}>Tambah</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter
