import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'



// const styles = extendTheme({
//   styles: {
//     global: (props) => ({
//       body: {
//         bg: mode(url("../public/images/bg.jpg"), '')(props),
//       }
//     })
//   },
// })

// const fonts = {
//   heading: "'M PLUS Rounded 1c'"
// }

const fonts = {
  body: 'Monaco',
  text: 'Monaco',
  heading: 'Monaco',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, fonts })
export default theme

