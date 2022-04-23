import { Flex, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

export function Error() {
  const { t } = useTranslation('errorPage')
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" pt="40" textAlign="center">
      <Heading as="h1" size="2xl">
        {t('errorPage.title')}
      </Heading>
      <Text fontSize={{ base: 'xl', md: '2xl' }} mt="2rem">
        <Link href="/" passHref>
          <ChakraLink>{t('errorPage.goToHomePage')}</ChakraLink>
        </Link>
      </Text>
      <Text fontSize={{ base: 'lg', md: 'xl' }} mt="1rem">
        {t('errorPage.description')}
      </Text>
    </Flex>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'errorPage'])),
  },
})

export default Error
