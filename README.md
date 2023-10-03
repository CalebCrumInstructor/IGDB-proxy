# IGDB-proxy

## How to use

- To use the yelp api, hit the following route with a url parameter that has the value you would normally use to access the yelp api (no api key needed).

- https://yelp-server-caleb-crum.herokuapp.com/api?url={endocodedURL}

- The url passed in the parameter must be encoded. Do this using the built in function encodeURIComponent()

## Example

```js
async function getYelpData(yelpURL) {
  try {
    var url = "https://api.igdb.com/v4/games";
    var bodyContent =
      "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;";

    var res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        url,
        bodyContent,
      },
    });

    console.log(res);

    var data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getYelpData(
  "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
);
```
