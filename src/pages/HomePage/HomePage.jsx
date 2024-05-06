import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner.jsx'
import "/public/css/main.scss";
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures.jsx';


function HomePage() {
  return (
      <main>
        <HomeBanner/>
        <HomeFeatures/>
      </main>
  )
}

export default HomePage