import styles from '../app/app.module.css';
import moment from 'moment'
import {useEffect, useState} from 'react'
import {MovieDetail as IMovie} from '@momos/types'
import {getDetail} from '../apis/moviedb'
import {Container} from 'react-bootstrap'
export type Props = {
  id: string
}
export function MovieDetail(props: Props) {
  const [movie, setMovie] = useState<IMovie | undefined>()
  useEffect(() => {
    getDetail(props.id)
      .then(data => {
        setMovie(data)
      })
  }, [])
  return (
    <div>
      {movie && <div>
        <div style={{
          backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` + ")",
          backgroundPosition: 'right -200px top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderBottom: "1px solid var(--primaryColor)"
        }}>
          <div className={styles.bgGrey}>
            <Container>
              <div style={{
                display: 'flex',
                flexWrap: 'nowrap',
              }}>
                <section className={styles.posterWrapper}>
                  <div className={styles.poster}>
                    <div className={styles.imageContent}>
                      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt=""/>
                    </div>
                  </div>
                </section>
                <div className={styles.posterHeaderWrapper}>
                  <section className={styles.sectionHeader}>
                    <div className={styles.sectionHeaderTitle}>
                      <h2>
                        <a href="">{movie.original_title}</a>&nbsp;
                        <span className={styles.releaseDate}>({moment(movie.release_date).format('Y')})</span>
                      </h2>
                    </div>
                    <div className={styles.facts}>
                      <span className={styles.certification}>PG-13</span> {/*nice UI so I leave it here (cannot find data)*/}
                      <span className={styles.genres}>
                        {movie.genres.map(genre => <a href='#' key={genre.id}>{genre.name},&nbsp;</a>)}
                      </span>
                      <span className={styles.runtime}>
                        {movie.runtime}m
                      </span>
                    </div>
                    <div className={styles.headerInfo}>
                      <h3>Overview</h3>
                      <p>
                        {movie.overview}
                      </p>
                    </div>
                  </section>
                </div>

              </div>
            </Container>
          </div>
        </div>
      </div>}
    </div>

  );
}

export default MovieDetail;
