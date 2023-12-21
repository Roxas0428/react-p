import React from "react";
import Button from "react-bootstrap/Button";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/roxas.png";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Roxas Code.</h1> <img src={profileImage} className="profileImage" />
      <p>
        Roxas Code.<br></br>
        私は現在ドラッグストアの店長をしています。趣味はゲームです。主にHTML/CSS/JavaScriptをメインに学習しています。バックエンドにも興味があるのでそちらも現在学習中です。
        <br></br>
        エンジニアを目指し毎日勉強をしている最中です。
      </p>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-question fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">クイズゲーム</h4>
              <a href="https://655bf24d6a7e600ac0090bc4--dulcet-pithivier-3f26a9.netlify.app/">
                こちらをクリック！
              </a>
              <p class="text-muted">
                JavaScriptを使用したクイズゲームになります。<br></br>
                FF好きの方は是非挑んでみてください。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブサイト</h4>
              <a href="https://stunning-peony-74a3c7.netlify.app/">
                こちらをクリック！
              </a>
              <p class="text-muted">
                HTML/CSSを利用したwebサイトを作成しました。<br></br>
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <a href="">こちらをクリック！</a>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          {/* <button type="button" class="btn btn-primary">
            スキル一覧
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
