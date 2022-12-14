import React from "react";
import styles from "./MovieApp.module.css";
import data from "./MovieAppData.json";
import search from "./assets/src.png"

const MovieWeb = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.app_header}>Movie App</div>
                <div className={styles.header_right}>
                    <img height="25px" width="25px" src={search}/>
                </div>
            </div>
            <div className={styles.movie_web}>
                {data?.map((value, ind) =>
                    <div key={ind}>
                        <h1 className={styles.movie_name}>{value?.name}{" "}<span className={styles.release_year}>({value?.releaseYear})</span>
                        </h1>
                        <img className={styles.movie_poster} src={value?.image}/>
                        {value?.pixelSize.map((btn, ind) => {
                            return (<React.Fragment key={ind}>
                                <button className={styles.pixel_btn}>{btn}</button>
                            </React.Fragment>)
                        })}

                        <div className={styles.about_movie}>About <span className={styles.about_movie_name}>{value?.name}</span></div>
                        <div className={styles.description}>{value?.description}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieWeb;
