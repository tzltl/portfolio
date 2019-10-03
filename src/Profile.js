import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  profileblock: {
    width: "max-content",
    height: "max-content",
    borderRadius: "15%",
    margin: "auto",
  },
  img: {
    width: "50%",
    borderRadius: "20%"
  },
  movie: {
    width: "40%",
    borderRadius: "20%",
    margin: "0.7vh"
  }
});


export default function Profile() {
    const classes = useStyles();
    return (
      <div>
        <title> ssbsd </title>
        <h1>Hi There, I'm TzlTL!</h1>
        <div className={classes.root}>
          <div style={{ justifyContent: "center" }}>
            <img src="./images/profileski.jpg" className={classes.img} />
            <h2> TzlTL is たけし</h2>
            <div
              className={classes.profileblock}
              style={{
                background: "green",
                width: "maxContent",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0.5em"
              }}
            >
              所属：
              <br />
              新潟大学大学院
              <br />
              自然科学研究科
              <br />
              電気情報工学専攻
              <br />
              修士１年
              <br />
              田嵜威司
              <br />
            </div>
          </div>
          <div>
            <div
              className={classes.profileblock}
              style={{ background: "blue", margin: 0 }}
            >
              趣味：
              <br />
              スキー，
              <br />
              動画編集
              <br />
              <iframe
                className={classes.movie}
                src="./videos/21yoSkiEdit.MP4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                className={classes.movie}
                src="./videos/shootingStarsMeme.MP4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div
              className={classes.profileblock}
              style={{ background: "orange", marginTop: "1em",width:'100%' }}
            >
              言語と用途：
              <br />
              Python（機械学習，コーディングテスト）
              <br />
              Ruby (Ruby on Railsでのweb開発)
              <br />
              JavaScript（React.jsを利用したフロントエンド開発，
              <br />
              バックエンド開発は勉強中）
              <br />
              HTML, CSS
              <br />
              Matlab (研究での数値解析，シミュレーション)
            </div>
          </div>
        </div>
      </div>
    );
}