import React from 'react'
import { useTranslation } from 'react-i18next'

interface params{
  path: string
}

const Translator = ({ path }: params) => {
  const { t } = useTranslation()
  return <>{t(path)}</>
}

export default Translator