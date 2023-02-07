import type { NextPage } from 'next'
import Head from 'next/head'

import { Grid, Box, Button } from '@mui/material'
import { useTheme } from '@/store/theme'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n/i18n'

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const currentLanguage = i18n.language
  const isDark = theme === 'dark'

  return (
    <Box>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        bgcolor={isDark ? '#000' : '#fff'}
      >
        <Grid item>
          <Box textAlign={'center'} fontSize={32} pb={5} color={isDark ? '#fff' : '#000'}>
            {t('welcome')}
          </Box>
          <Button onClick={toggleTheme}>{'Toggle Theme ' + theme}</Button>
          <Button
            onClick={() => i18n.changeLanguage(currentLanguage === 'de-DE' ? 'en-US' : 'de-DE')}
          >
            {'Langugae ' + currentLanguage}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
