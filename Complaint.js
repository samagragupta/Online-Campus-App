import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar,
} from 'react-native';

import Login from './components/login/Login'

class Complaint extends React.Component {
    // const {navigate} = this.props.navigation;

    render() {
        // console.log('complaints', this.state.complaints)
        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="HomeScreens" style={styles.button}>

                </Button>
               
            </View>

            
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'blue',
        marginTop: 150,
        marginLeft: 100,
    }
});

export default (Complaint);

