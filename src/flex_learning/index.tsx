import { PropsWithChildren, useState } from "react"
import { Alert, StyleSheet, Text, View,TouchableOpacity} from "react-native"


export default function FlexLearning() {
    const [flexDirection, setflexDirection] = useState('column')
    return (
        <PreviewLayout
            label="flexDirection"
            values={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
        </PreviewLayout>
    )
}

type PreviewLayoutProps = PropsWithChildren<{
    label: string,
    values: string[],
    selectedValue: string,
    setSelectedValue: (value: string) => void
}>

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
}: PreviewLayoutProps) => {
    return (
        <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => setSelectedValue(value)}
                        style={[styles.button, selectedValue === value && styles.selected]}
                    >
                        <Text style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
        </View>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch'
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral'
    },
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue'
    },
    box: {
        width: 50,
        height: 50
    },
    selected: {
        backgroundColor : 'coral',
        borderWidth : 0
    },
    selectedLabel: {
        color: 'white',
    }
})