import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { collection, addDoc } from 'firebase/firestore'
import { FIRESTORE } from './firebaseConfig'

const Bai71 = () => {
 const [text, setText] = useState('');
 const handleInsert = async () => {
    try{
        const sinhViensRef = collection(FIRESTORE, 'SinhViens'); // Lấy tham chiếu đến bộ sưu tập "SinhViens"
        const tailieu = await addDoc(sinhViensRef, { // Thêm dữ liệu vào bộ sưu tập "SinhViens"
            text: text,
        });
        console.log('Tài liệu được ghi với ID =', tailieu.id);
        setText('');
    } catch(error){
        console.error('Lỗi ghi dữ liệu', error);
    }
 }
 return (
    <View style = {{marginTop: 100}}>
        <TextInput placeholder='Nhập tên sinh viên' value={text} onChangeText={setText} style = {{marginBottom: 30, marginLeft: 20, padding: 10}}/>
        <Button title='Thêm dữ liệu' onPress={handleInsert} />
    </View>
 )
}

export default Bai71


const styles = StyleSheet.create({})