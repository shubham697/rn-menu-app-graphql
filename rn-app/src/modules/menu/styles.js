import { StyleSheet } from 'react-native';
import Theme from "../../theme";

export const ListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    spaceRow: {
        width: 15
    },
    spaceCol: {
        height: 15
    },
    listContainer: { paddingHorizontal: 20, marginTop: 20 },
    callItemContainer: {
        padding: 12,
        borderRadius: 15,
        backgroundColor: '#FAFAFC'
    },
    name: {
        flex: 1,
        fontSize: 18,
        color: Theme.colors.text,
        fontFamily: Theme.fonts.semiBold
    },
    title: {
        marginTop: 5,
        fontSize: 12,
        color: Theme.colors.gray7,
        fontFamily: Theme.fonts.semiBold
    },
});
