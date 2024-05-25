import style from "../hero/hero.module.css";
import CaixaImg from "../../assets/img/Caixa.png"
const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.heroWraper}>
        <div className={style.heroContent}>
          <h1>
            <span>UNO® minimalista,</span> representa uma excelente opção de
            presente para colecionadores!
          </h1>
          <p>
            Esta edição especial do UNO®, o jogo de cartas adorado por todos,
            tem um visual totalmente exclusivo.
          </p>
          <div className={style.heroBtsDiv}>
            <a href="/" className={style.saibaMaisBtn}>Saiba mais</a>
            <a href="/" className={style.encontrarBtn}>Onde encontrar</a>
          </div>
        </div>
        <div className={style.heroImgDiv}>
            <img src={CaixaImg}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
