import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BotContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        backgroundColor: '#ededed',
        position: 'relative',
        bottom: 20,
    },
    ButLeft: {
        width: 180,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    },
    ButRight: {
        width: 180,
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
    },
    UnableBut: {
        padding: 15,
        fontSize: 16,
        color: '#2089dc',
    },
    DisableBut: {
        padding: 15,
        fontSize: 16,
        color: '#ccc',
    },
    IconStyle: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
    },
});