import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { borderRadius } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        // alignItems: 'stretch',
        justifyContent: 'center',
        // width:'70%',
        margin:'auto'
    },
    profileblock: {
        // border: 'solid',
        // width: '100%',
        width: 'max-content',
        borderRadius:'15%',
        margin: '0.2em'
    },
    img: {
        width:'20%',
        borderRadius:'20%'
    }
});


export default function Profile() {
    const classes = useStyles();
    return (
        <div>
            <title> ssbsd </title>
            <h1>Hi There, I'm TzlTL!</h1>
            <img src='./images/profileski.jpg' className={classes.img}></img>
            <h2> TzlTL is たけし</h2>
            <div className={classes.root}>
                <div className={classes.profileblock} style={{ background: 'green' }}>
                    所属：<br />
                    新潟大学大学院<br />
                    自然科学研究科<br />
                    電気情報工学専攻<br />
                    修士１年<br />
                    田嵜威司<br />
                </div>
                <div className={classes.profileblock} style={{ background: 'blue' }}>
                    趣味：<br />
                    スキー，<br />最近はプログラミング<br />
                </div>
            </div>
            <div className={classes.profileblock} style={{ background: 'orange',margin:'auto'}}>
                    言語と用途：<br />
                    Python（機械学習，コーディングテスト）<br />
                    Ruby (Ruby on Railsでのweb開発)<br />
                    JavaScript（React.jsを利用したフロントエンド開発，<br />
                    バックエンド開発は勉強中）<br />
                    HTML, CSS<br />
                    Matlab (研究での数値解析，シミュレーション)
                </div>
            </div>


    )
}