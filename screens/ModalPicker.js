import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';

export default class ModalPicker extends Component {
    static navigationOptions = {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.options = ['red', 'blue', 'yellow', 'maroon', 'orange', 'green', 'gray', 'black', 'purple', 'pink', 'brown', 'navy', 'fuchsia', 'silver' ]
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            selectedItem: '',
        };
        Dimensions.addEventListener("change", (e) => {
            this.setState(e.window);
        });
    }

    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    closeModal = (bool) => {
        this.props.changeModalVisibility(bool)
        //this.setState({ selectedItem: '' })
    }
    
    render() {
        const option = this.options.map( (option, index) => {
            const borderBottom = index===this.options.length-1 ? (null) : (<View style={styles.borderBottom}></View>);
            return <TouchableOpacity activeOpacity={1} style={styles.option} key={index} 
                    onPress={() => this.setState({ selectedItem: option })}>
                <Text style={ this.state.selectedItem===option ? ([styles.text, {color: option}]) : (styles.text) }> 
                    {option.charAt(0).toUpperCase() + option.slice(1)} 
                </Text>
                {borderBottom}
            </TouchableOpacity>
        })
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.changeModalVisibility(false)} style={styles.contentContainer}>
                <View style={[styles.modal, {width: this.state.width - 80, height: this.state.height - 80}]}>
                    <ScrollView style={styles.optionView}>
                        {option}
                    </ScrollView>
                    <TouchableHighlight onPress={() => this.closeModal(false)} 
                        style={[styles.touchableHighlight, {backgroundColor: '#ff7f50'}]} underlayColor={'#f1f1f1'}>
                        <Text style={styles.text}>
                            close
                        </Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
            
        )
    }
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: 150,
        paddingTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: "white",
        borderRadius: 10,
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    touchableHighlight: {
        flex: 1,
        backgroundColor: 'white', 
        paddingVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row',
    }
})