export const getGenresId = async ( genreIds ) => {
  console.log(genreIds);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_URL}discover/movie?language=en&with_genres=${genreIds}&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const movies = await response.json();
    console.log(movies)
  } catch (error) {
    console.log(error);
  }
};
