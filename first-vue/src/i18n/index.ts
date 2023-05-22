import { createI18n } from 'vue-i18n'
import enMessage from './language/lang_en'
import zhMessage from './language/lang_zh'
const messages = {
  en: enMessage,
  zh: zhMessage
}
const lang = (navigator.language || 'en').toLocaleLowerCase() 
const language = lang.split('-')[0] || 'zh';
console.error(language)
export default createI18n({
  legacy: false,
  locale: language, // 默认语言
  messages
})