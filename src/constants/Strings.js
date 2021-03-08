import LocalizedStrings from 'react-native-localization';
import EnJson from "./lang/en.json"
import RuJson from "./lang/ru.json"
import FaJson from "./lang/fa.json"
import FrJson from "./lang/fr.json"

let Strings = new LocalizedStrings({
    en: EnJson,
    ru: RuJson,
    fa: FaJson,
    fr: FrJson,
})

export default Strings;