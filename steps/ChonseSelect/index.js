import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ChonseSelect = ({
    data,
    initValue,
    onPress,
    colorActive = '#fff',
    color = '#333',
    borderColor = '#cdcdcd',
    style,
    textStyle,
    label = '',
    marginLeft = 0,
    height,
    labelStyle
}) => {
    const size = Object.keys(data).length;
    return (
        <View style={{ marginLeft: marginLeft }}>
            {label != '' &&
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            }
            <View style={[styles.wrapRow, style]}>
                {data.map((item, key) => {

                    if (key == 0) {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapStartActive : styles.wrapStart, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                    else if (key == size - 1) {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapEndActive : styles.wrapEnd, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapActive : styles.wrap, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>


                            </TouchableOpacity>
                        );
                    }
                })}
            </View>
        </View>
    )
}

module.exports = {
    ChonseSelect: ChonseSelect
}

const styles = StyleSheet.create({
    wrapRow: {
        width: 300,
        flexDirection: 'row',
    },
    label: {
        marginBottom: 5
    },
    wrapStart: {
        width: '32%',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapStartActive: {
        width: '32%',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        backgroundColor: '#2089dc',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        width: '32%',
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapActive: {
        width: '32%',
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#383838',
        backgroundColor: '#2089dc',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapEnd: {
        width: '32%',
        borderWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapEndActive: {
        width: '32%',
        borderWidth: 1,
        backgroundColor: '#2089dc',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 11,
        color: '#383838'
    }
});