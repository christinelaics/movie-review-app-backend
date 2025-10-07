const movies = [
  {
    id: "m1",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through dream-sharing must plant an idea in a CEO's mind.",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    id: "m2",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    description: "Batman faces his greatest psychological and physical tests when the Joker wreaks havoc on Gotham.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: "m3",
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: "m4",
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    description: "A poor family infiltrates a wealthy household, leading to unexpected and deadly consequences.",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: "m5",
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    description: "A young girl becomes trapped in a mysterious spirit world and must find her way back home.",
    image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg"
  },
  {
    id: "m6",
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: "m7",
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    description: "A betrayed Roman general fights his way back to power to avenge his murdered family.",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    id: "m8",
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    description: "A young drummer enrolls in a prestigious music academy and faces an abusive instructor.",
    image: "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg"
  },
  {
    id: "m9",
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    description: "Two imprisoned men bond over years, finding solace and redemption through acts of decency.",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: "m10",
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    id: "m11",
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    description: "The lives of two mob hitmen, a boxer, and a gangster’s wife intertwine in Los Angeles.",
    image: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg"
  },
  {
    id: "m12",
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    description: "An office worker and a soap salesman form an underground fight club that spirals out of control.",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  {
    id: "m13",
    title: "The Social Network",
    year: 2010,
    genre: "Biography",
    description: "The story of how Mark Zuckerberg created Facebook and faced personal and legal challenges.",
    image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"
  },
  {
    id: "m14",
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    description: "A jazz musician and aspiring actress fall in love but struggle to balance dreams and love.",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
  },
  {
    id: "m15",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    description: "A legendary concierge and his protégé become entangled in a murder mystery at a lavish hotel.",
    image: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg"
  },
  {
    id: "m16",
    title: "Her",
    year: 2013,
    genre: "Romance",
    description: "A lonely man develops a relationship with an advanced AI operating system.",
    image: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg"
  },
  {
    id: "m17",
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Sci-Fi",
    description: "A woman discovers she must connect with alternate versions of herself to save the multiverse.",
    image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
  },
  {
    id: "m18",
    title: "The Prestige",
    year: 2006,
    genre: "Mystery",
    description: "Two rival magicians engage in a lifelong battle to create the ultimate illusion.",
    image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg"
  },
  {
    id: "m19",
    title: "Oppenheimer",
    year: 2023,
    genre: "Biography",
    description: "The story of J. Robert Oppenheimer, the father of the atomic bomb, and his moral dilemmas.",
    image: "https://image.tmdb.org/t/p/w500/bAFmcrXAJvYQeI1FANV0HRZpD7T.jpg"
  },
  {
    id: "m20",
    title: "Dune: Part One",
    year: 2021,
    genre: "Adventure",
    description: "A noble family becomes embroiled in a war for control of a desert planet’s valuable spice.",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  }
];

module.exports = { movies };