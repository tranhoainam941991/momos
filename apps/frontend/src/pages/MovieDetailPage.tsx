import {
  useParams
} from "react-router-dom";
import Header from '../components/Header'
import MovieDetail from '../components/MovieDetail'
interface Params {
  id?: number
}
export function MovieDetailPage() {
  const {id} = useParams<{ id: string }>();
  return (
    <div>
      <Header/>
      <MovieDetail id={id}/>
    </div>
  );
}

export default MovieDetailPage;
