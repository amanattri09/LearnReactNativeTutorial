import LocalizedStrings from "react-native-localization";
import { exp } from "react-native-reanimated";

const StringsOfLanguages = new LocalizedStrings({
    hi: {
        first: 'क्या हाल है ?',
        second: 'मैं ठीक हूँ ?',
    },
    en: {
        first: 'How are You ?',
        second: 'I am fine ',
    }
})


export default StringsOfLanguages