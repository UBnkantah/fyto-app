import React from 'react'
import NftAbtItem from '../components/NftAbtItem/NftAbtItem'
import NFTArtistPr from '../components/NFTArtistPr/NFTArtistPr'
import NFTHero from '../components/NFTHero/NFTHero'

const NFT = () => {
  return (
    <div>
      <NFTHero />
      <NFTArtistPr />
      <NftAbtItem />
    </div>
  )
}

export default NFT