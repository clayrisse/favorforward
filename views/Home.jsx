const React = require("react");
const Layout = require("./Layout");
// const Card = require("./components/Card");

function Home(props) {
  return (
    <Layout title="Home Page" userIsLoggedIn={props.userIsLoggedIn} name={props.name} profilepic={props.profilepic} location={props.location}>
        
        <div className="mapframe">
          <div id='map'></div>
        </div>

      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script>
    </Layout>
  );
}

module.exports = Home;



// { props.favorList.map( (eachFavor, i)=> {
//   return (
//     <a key={i} href={`/favor/${eachFavor.id}`}>
//       <h2>{eachFavor.title}  -------Lat: {eachFavor.location.coordinates[0]}, {eachFavor.location.coordinates[1]}</h2>
//       {/* <favorCard key={i} /> */}
//     </a>
//   )
// })
// }