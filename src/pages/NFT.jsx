import React from 'react'
import NftAbtItem from '../components/NftAbtItem/NftAbtItem'
import NFTArtistPr from '../components/NFTArtistPr/NFTArtistPr'
import NftCollCon from '../components/NftCollCon/NftCollCon'
import NFTHero from '../components/NFTHero/NFTHero'

const NFT = () => {
  return (
    <div>
      <NFTHero />
      <NFTArtistPr />
      <NftAbtItem />
      <NftCollCon />
    </div>
  )
}

export default NFT