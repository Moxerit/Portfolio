import Layout from "../components/layouts/main";
import Chakra from '../components/chakra'

import '../public/globals.css'
import '../public/app.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    
    <Chakra cookiers={pageProps.cookies}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </Chakra>
  );
}

export default Website