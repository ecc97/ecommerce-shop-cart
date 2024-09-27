import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-5xl text-white font-bold">Welcome!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus neque doloremque delectus, ipsam fuga facilis ut quas rerum obcaecati pariatur nihil atque architecto cupiditate laborum magni facere soluta assumenda incidunt.
      Exercitationem accusantium natus iste ad, modi aliquam tenetur consequatur animi nesciunt cupiditate nostrum mollitia iure delectus quos distinctio tempora magnam dicta officiis, doloremque voluptas libero vero. Amet cum nam vero.
      Vel possimus tenetur, aperiam molestiae repudiandae officiis numquam nulla architecto blanditiis maxime quaerat earum at sit veritatis, distinctio repellendus, nemo aliquid odio veniam dolorem beatae! Facilis nobis eius magnam dolor?
      Perspiciatis reprehenderit dolorem repellendus laudantium consequuntur, laborum obcaecati cupiditate tempore alias minus, eligendi a neque corrupti, aliquid accusantium. Molestiae cumque alias, eius adipisci hic voluptatum temporibus sunt porro quod harum?
      Tempore ab quaerat esse doloremque vel! Illo sit atque aperiam adipisci? Facere ratione ad commodi error odit debitis cumque numquam officiis animi ducimus dolor sequi, deserunt, harum similique explicabo. Dolorum?</p>
      <div>
        <Link href="/about">
            Learn more
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
