import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import AddRadio from './pages/addRadio.jsx';
import AddPodcast from './pages/addPodcast.jsx';
import Listen from './pages/listen.jsx';
import Pools from './pages/pools.jsx';
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
              <Route path="/add-radio" element={<AddRadio />} />
              <Route path="/add-podcast" element={<AddPodcast />} />
              <Route path="/listen" element={<Listen />} />
              <Route path="/pools" element={<Pools />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
