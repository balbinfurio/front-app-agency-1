import useFetchData from "./hooks/useFetchData";

function App() {
  const { loading, result, error } = useFetchData(
    "http://localhost:1337/api/localizations"
  );
  console.log(result);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Errorcito</p>

  return (
    <div>
      <h1>Strapi v4 - Obteniendo datos</h1>
      { result.data.map((post) => (
        <h2>{ post.attributes.name }</h2>
      ))}
    </div>
    
  );
}

export default App;

