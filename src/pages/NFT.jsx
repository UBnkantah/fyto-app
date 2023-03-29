import Footer from '../components/Footer/Footer'
import NftAbtItem from '../components/NftAbtItem/NftAbtItem'
import NFTArtistPr from '../components/NFTArtistPr/NFTArtistPr'
import NftCollCon from '../components/NftCollCon/NftCollCon'
import NFTEclipse from '../components/NFTEclipse/NFTEclipse'
import NFTHero from '../components/NFTHero/NFTHero'
import WantCom from '../components/WantCom/WantCom'

const NFT = () => {
  return (
    <div>
      <NFTHero />
      <NFTArtistPr />
      <NftAbtItem />
      <NFTEclipse />
      <NftCollCon />
      <WantCom />
      <Footer />
    </div>
  )
}

export default NFT