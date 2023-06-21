import React from "react";
import useFetchData from "./hooks/useFetchData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Body from "./components/Body";

function App() {
  const { loading, result, error } = useFetchData(
    "https://strapi-production-933e.up.railway.app/api/tours"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorcito</p>;

  return (
    <>
      <NavBar />
      <Sidebar />
      <Body />
      <div>
        <h1>OBTENIENDO DATOS API</h1>
        {result.data.map((post) => (
          <h2 key={post.id}>{post.attributes.name}</h2>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
