import React from "react"
import { render } from "react-dom"
import "./style.css"

let moviesArr = [
  {
    title: "The Shape of Water",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    link: "http://www.imdb.com/title/tt4701724/?ref_=inth_ov_tt",
    year: 2017,
    rating: 2
  },
  {
    title: "The Commuter",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NDg1MjI4OV5BMl5BanBnXkFtZTgwMDIwMTEwNDI@._V1_SY1000_CR0,0,647,1000_AL_.jpg",
    link: "http://www.imdb.com/title/tt4701724/?ref_=inth_ov_tt",
    year: 2018,
    rating: 4
  },
  {
    title: "I Kill Giants",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MTc3ODcwMV5BMl5BanBnXkFtZTgwNTU2MjA4NDM@._V1_SY1000_SX675_AL_.jpg",
    link: "http://www.imdb.com/title/tt4547194/?ref_=vi_tr_mp_l_9",
    year: 2017,
    rating: 4
  },
  {
    title: "Red Sparrow",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    link: "http://www.imdb.com/title/tt2873282/?ref_=vi_tr_mp_l_8",
    year: 2018,
    rating: 4
  },
  {
    title: "Ferdinand",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    link: "http://www.imdb.com/title/tt3411444/?ref_=vi_tr_mp_l_24",
    year: 2017,
    rating: 4
  },
  {
    title: "The Untitled Deadpool Sequel",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY1000_SX675_AL_.jpg",
    link: "http://www.imdb.com/title/tt5463162/?ref_=rvi_tt",
    year: 2018,
    rating: 4
  }
]