import dayjs from 'dayjs'
import pl from 'dayjs/locale/pl'
import en from 'dayjs/locale/en'
import * as Localization from 'expo-localization'

const locale = Localization.locale === 'pl' ? { ...pl } : { ...en }

dayjs.locale({
    ...locale,
})

export default dayjs
