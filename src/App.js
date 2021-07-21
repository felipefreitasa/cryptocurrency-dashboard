import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Coin from './components/Coin/Coin'
import Sidebar from './components/Sidebar/Sidebar'
import Sidebar2 from './components/Sidebar2/Sidebar2'
import Navbar from './components/Navbar/Navbar'
import TitlesTable from './components/TitlesTable/TitlesTable'
import Hamburguer from './components/Hamburguer/Hamburguer'


function App() {

  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

  const [isToggled, setIsToggled] = useState(false)


  const [sidebarOpened, setSidebarOpened] = useState(false)

  function openSidebar() {
    setSidebarOpened(!sidebarOpened)
  }


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        console.log(res.data);
        setCoins(res.data)
      }).catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className={isToggled ? "coin-app darkmodeapp" : "coin-app lightmodeapp"}>
      <Navbar onChange={handleChange} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <Hamburguer open={sidebarOpened} onClick={openSidebar} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <Sidebar open={sidebarOpened} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <Sidebar2 isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <TitlesTable isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <div className="coins-cointainer">
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
