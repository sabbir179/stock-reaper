
import BaseLayout from '../componets/Layout/baseLayout';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css'
import '../styles/style.css'
function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
  
}

export default MyApp
