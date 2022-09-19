import Layout from "../components/layouts/main";
import Chakra from '../components/chakra'
import Fonts from '../components/fonts'

import '../public/app.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    
    <Chakra cookiers={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </Chakra>
  );
}

export default Website