/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default class App extends Component {
    constructor() {
        super()
        this.state = {
            TextVal: "",
            calculationTxt: ""
        }
    }

    calResult = () => {
        const ans = eval(this.state.TextVal)
        this.setState({
            TextVal: "",
            calculationTxt: ans
        })
        console.log(ans, this.state.TextVal)
    }

    validateTxt = () => {
        var lastChar = this.state.TextVal.slice(-1)
        switch (lastChar) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    handleNumPress = (val) => {
        if (val == "=") {
            return this.validateTxt() && this.calResult()
        }
        if (val == ".") {
            this.cal
        }

        this.setState({
            TextVal: this.state.TextVal + val
        })
    }

    handleOpPress = (operator) => {
        switch (operator) {
            case 'Del':
                var newTxt = this.state.TextVal.slice(0, -1)
                this.setState({
                    TextVal: newTxt
                })
                break
            case 'Clr':
                this.setState({
                    TextVal: "",
                    calculationTxt: ""
                })
                break
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                if ((this.state.TextVal == "" && this.setState.calculationTxt == "") || ((['D', '/', '*', '-', '+'].indexOf(this.state.TextVal.slice(-1)) !== -1 && ['D', '/', '*', '-', '+'].indexOf(operator) !== -1))) return


                if (this.state.TextVal === "" && this.state.calculationTxt !== "") {
                    this.setState({
                        TextVal: this.state.calculationTxt + operator
                    })
                } else {
                    this.setState({
                        TextVal: this.state.TextVal + operator
                    })
                }
        }
    }

    render() {

        var rows = []
        fill = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
        for (let i = 0; i < 4; i++) {
            var row = []
            for (let j = 0; j < 3; j++) {
                row.push(<TouchableOpacity key={fill[i][j]} onPress={() => this.handleNumPress(fill[i][j])} style={styles.btn}>
                    <Text style={styles.btntxt}>{fill[i][j]}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>)
        }


        operator = ['Clr', 'Del', '/', '*', '-', '+']
        var ops = []
        for (let k = 0; k < 6; k++) {
            ops.push(<TouchableOpacity onPress={() => this.handleOpPress(operator[k])} style={styles.btn}>
                <Text style={styles.btntxt}>{operator[k]}</Text>
            </TouchableOpacity>)
        }

        return (
            <View style={styles.container}>
                <View style={styles.results}>
                    <Text style={styles.resultText}>{this.state.TextVal}</Text>
                </View>
                <View style={styles.calculations}>
                    <Text style={styles.calculationText}>{this.state.calculationTxt}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operators}>
                        {ops}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultText: {
        fontSize: 45,
        color: 'black'
    },
    btntxt: {
        fontSize: 30,
        color: "white"
    },
    calculationText: {
        fontSize: 35,
        color: '#a3a3a3'
    },
    btn: {
        flex: 1,
        alignItems: "center",
        alignSelf: 'stretch',
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    results: {
        justifyContent: 'center',
        alignItems: "flex-end",
        backgroundColor: 'white',
        flex: 2
    },
    calculations: {
        justifyContent: 'center',
        alignItems: "flex-end",
        backgroundColor: 'white',
        flex: 1
    },
    buttons: {
        flex: 4,
        flexDirection: "row"
    },
    numbers: {
        flex: 3,
        backgroundColor: "#434343"
    },
    operators: {
        flex: 1,
        backgroundColor: "#636363",
        justifyContent: 'space-around',
        alignItems: "center"
    }

});
