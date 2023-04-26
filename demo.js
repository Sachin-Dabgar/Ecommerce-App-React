// Define an array of artist names
const artistNames = ["Coldplay", "Ed Sheeran", "Adele"];

// Define your Spotify API endpoint and access token
const spotifyEndpoint = "https://api.spotify.com/v1/search";
const accessToken =
    "BQAuIryMoOoBfDbjCugC4P-h04PpCyLOfZEryoGcZ9U7alNWBXsoOx_jpl4FyTPCgaS_l-FFahx-8UfU2yEnZGkP4ki3yrDodvIk4b7UP820TFxcyZD1";

// Loop through the artist names and make a request to the Spotify API for each one
artistNames.forEach(async (artistName) => {
    // Encode the artist name for use in the API endpoint URL
    const encodedArtistName = encodeURIComponent(artistName);
    console.log("encoded", encodedArtistName);

    // Make a GET request to the Spotify API search endpoint with the artist name
    const response = await fetch(
        `${spotifyEndpoint}?q=${encodedArtistName}&type=artist&limit=1`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    // Parse the response JSON to get the artist ID
    const data = await response.json();
    const artistId = data.artists.items[0].id;

    // Do something with the artist ID (e.g. log it to the console)
    console.log(`Artist ID for ${artistName}: ${artistId}`);
});
