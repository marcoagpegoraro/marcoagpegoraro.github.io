import React from 'react'
import { useTranslation } from 'react-i18next'

interface params {
  path: string
  stringReplaces?: StringReplace[] | undefined
}

interface StringReplace {
  stringToReplace: string
  replaceTo: string
}

const Translator = ({ path, stringReplaces }: params) => {
  const { t } = useTranslation()
  let translatedText = t(path)

  if (stringReplaces) {
    for (const stringReplace of stringReplaces) {
      translatedText = translatedText.replace(stringReplace.stringToReplace, stringReplace.replaceTo)
    }
  }


  return <>{translatedText}</>
}

export default Translator