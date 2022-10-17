import Layout from "../components/layouts/main";
import Chakra from '../components/chakra'
import { AnimatePresence } from 'framer-motion'

import '../node_modules/highlight.js/styles/default.css'
import '../public/globals.css'
import '../public/app.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
      <AnimatePresence
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
        <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website