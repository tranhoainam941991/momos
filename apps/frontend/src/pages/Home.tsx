import Header from '../components/Header'
import Movies from '../components/Movies'
export function Home() {
  return (
  <div>
    <Header/>
    <Movies type='popular' title="What's popular"/>
    <Movies type='latest' title="Latest"/>
  </div>
);
}

export default Home;
