import styles from '../app/app.module.css';
import moment from 'moment'
import {useEffect, useState} from 'react'
import {MovieSummary} from '@momos/types'
import {getMovies} from '../apis/moviedb'
import {Container} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
export type Props = {
  type: string
  title: string
}
export function Movies(props: Props) {
  const [movies, setMovies] = useState<MovieSummary[] | undefined>()
  useEffect(() => {
    getMovies(props.type)
      .then(data => {
        setMovies(data)
      })
  }, [])
  return (
    <div>
      {movies && <div>
        <Container>
          <div className={styles.media}>
            <div className={styles.columnWrapper}>
              <div className={styles.contentWrapper}>
                <div className={styles.whiteColumn}>
                  <section className={styles.sectionPanel}>
                    <h3>{props.title}</h3>

                    <div className={styles.castScroller}>
                      <ol className={styles.peopleScroller}>
                        {movies.map(movie =>
                          <li className={styles.peopleCard}>
                            <Link to={`/movie/${movie.id}`}>
                              <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${movie.poster_path}`} alt=""/>
                            </Link>
                            <p>
                              <Link to={`/movie/${movie.id}`} className={styles.peopleName}>{movie.title}</Link>
                            </p>
                            <p className={styles.character}>{moment(movie.release_date).format('LL')}</p>
                          </li>
                        )}


                      </ol>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>}
    </div>

  );
}

export default Movies;
