import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView, RefreshControl, TouchableOpacity, Alert, ActivityIndicator,TextInput } from 'react-native';
import { FlatGrid , SectionGrid } from 'react-native-super-grid';
import { navigate } from 'react-navigation';
import Constants from 'expo-constants';

class Grid extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            dataList: [],
            isLoading: true,
            refreshFlatList: true,
            result: null,
        }
    }

    OpneZaiko = async(item) => {
        //Alert.alert(item.keyExtractor)
        let result = await WebBrowser.openBrowserAsync(
            'http://portal174.intra.sanko-kk.co.jp/ShohinZaiko/ShohinZaikoTop.aspx?S_SHOHIN_WORD=d4-1111-14&S_ZAIKO_SHUBETU=0&CODE=812300-00'+ item.bin + item.kojo)
        this.setState({ result });
    }

    ReloadPage = () => {
        this.setState({
            refreshFlatList: !this.state.refreshFlatList
        })
        //window.alert(this.setState.refreshFlatList)
    }

    componentDidMount(){
/*
        fetch('')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoading: false,
                    dataList:[],                    
                })
            })
*/

        this.setState({
            isLoading:false,
            counter:0,
            dataList:[
                { kojo:'K4', t_no:'A01' , name: 'Ａ－１', status: '2', code: '#e67e22', bin: '71', nizoroe:'A17,A27,A29' },
                { kojo:'K4', t_no:'A02' , name: 'Ａ－２', status: '1', code: '#e74c3c', bin: '6', nizoroe:'' },
                { kojo:'K4', t_no:'A03' , name: 'Ａ－３', status: '2', code: '#e67e22', bin: '5', nizoroe:'A14' },
                { kojo:'K4', t_no:'A04' , name: 'Ａ－４', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'A05' , name: 'Ａ－５', status: '2', code: '#e67e22', bin: '21', nizoroe:'B22' },
                { kojo:'K4', t_no:'B01' , name: 'Ｂ－１', status: '1', code: '#e74c3c', bin: '15', nizoroe:'' },
                { kojo:'K4', t_no:'B02' , name: 'Ｂ－２', status: '2', code: '#e67e22', bin: '95', nizoroe:'B02' },
                { kojo:'K4', t_no:'B03' , name: 'Ｂ－３', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'B04' , name: 'Ｂ－４', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'C01' , name: 'Ｃ－１', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'C02' , name: 'Ｃ－２', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'C03' , name: 'Ｃ－３', status: '2', code: '#e67e22', bin: '68', nizoroe:'C01' },
                { kojo:'K4', t_no:'C04' , name: 'Ｃ－４', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'J01' , name: '掛川定期', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'J02' , name: '掛川臨時①', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'J03' , name: '掛川臨時②', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'K02' , name: 'Ｆ－１', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'K03' , name: 'Ｆ－２', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'K04' , name: 'Ｆ－３', status: '0', code: '#3498db', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'K05' , name: 'Ｆ－４', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'K06' , name: 'Ｆ－５', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'W01' , name: 'Ｗ－１', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'W02' , name: 'Ｗ－２', status: '9', code: '#636363', bin: '', nizoroe:'' },
                { kojo:'K4', t_no:'W03' , name: '袋井定期', status: '0', code: '#3498db', bin: '', nizoroe:'' },
            ]
        })
    }

    wait = (timeout) => {
        return new Promise((resoßlve, reject) => {
            setTimeout(() => {
                resolve('OK')
            }, timeout);
        });
    }

    render(){
        const {navigation} = this.props.navigation;


        return(
            this.state.refreshFlatList 
            ?
            <SafeAreaView> 
                <ScrollView

                >
                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Button
                            color='#636363'
                            upperacse={false}
                            title="List"
                            onPress={() => this.props.navigation.navigate('List')}
                        />
                        <Button
                            color='#1367ec'
                            style={{width:50}}
                            upperacse={false}
                            title="更新"
                            onPress={()=> this.ReloadPage(this)}
                        />
                    </View>
                </ScrollView> 
            </SafeAreaView>
            :
            <SafeAreaView>
                <ScrollView>
                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Button
                            color='#636363'
                            upperacse={false}
                            title="List"
                            onPress={() => this.props.navigation.navigate('List')}
                        />
                        <Button
                            color='#1367ec'
                            style={{width:50}}
                            upperacse={false}
                            title="更新"
                            onPress={()=> this.ReloadPage(this)}
                        />
                    </View>
                    {// <TextInput style={{marginLeft:15}} placeholder='検索'/> 
                    }
                    <FlatGrid
                        itemDimension={100}
                        items={this.state.dataList}
                        keyExtractor={( item, index ) => item.kojo + item.t_no}
                        renderItem={({ item, index }) => (
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <TouchableOpacity
                                    onPress={() => this.OpneZaiko(item)} >
                                    <Text style={styles.itemName} >{item.name}</Text>
                                    {(item.bin != '')
                                        ? (<Text style={[styles.itemCode,{justifyContent:'flex-end'}]}>{item.bin}便</Text>) : null
                                    }
                                    {(item.nizoroe != '')
                                        ? (<Text style={[styles.itemCode,{justifyContent:'flex-end'}]}>{item.nizoroe}</Text>) : null
                                    }
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </ScrollView> 
            </SafeAreaView>
        )
    }

}

Grid.navigationOptions = {
    title: '出荷ターミナル',    
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 30,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-start',
      borderRadius: 3,
      padding: 10,
      height: 140,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      marginBottom:5,
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 15,
      color: '#fff',
    },
    buton:{
        width: 50,
    }
  });

export default Grid;