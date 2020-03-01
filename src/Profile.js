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
    width: "10%",
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
        <div className={classes.root}>
          <div>
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
              趣味をここに書く
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