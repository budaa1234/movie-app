export const getSimilarMovies = async (movieId, page=1) => {
    console.log(page)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/similar?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
  const data = await response.json();  
  
  return data

};
