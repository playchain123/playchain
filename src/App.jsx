import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Trade from './pages/trade.jsx';
import Earns from './pages/earns.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

// import { WagmiConfig } from 'wagmi'
// import { arbitrum, polygon, optimism, mainnet } from 'wagmi/chains'
AOS.init();
// const projectId = '4a8a24d94e714b4a3640be30ac65b887'

// const metadata = {
//   name: 'Web3Modal',
//   description: 'Web3Modal Example',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }

// const chains = [mainnet, polygon, optimism, arbitrum]
// const wagmiConfig = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata: {
//     name:text
//   }
// })

// createWeb3Modal({
//   metadata,
//   wagmiConfig,
//   projectId,
//   enableAnalytics: true
// })
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/earn" element={<Earns />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
