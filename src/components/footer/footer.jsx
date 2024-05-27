import style from "../footer/footer.module.css";
import unoLogo from "../../assets/img/uno-logo.png";
import insta from "../../assets/img/insta-icon.svg";
import face from "../../assets/img/face-icon.svg";
import twitter from "../../assets/img/twitter-x.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <div className={style.textFooterPai}>
          <div className={style.logo}>
            <img src={unoLogo} alt="logo de uno" />
          </div>
          <span span className={style.textFooter}>
            
              Esta edição especial do UNO®, o jogo de cartas adorado por todos,
              tem um visual totalmente exclusivo. Concebida com uma estética
              minimalista, essa versão é um grande presente para colecionadores
              de UNO®.
           
          </span>
        </div>


        <div className={style.containerI}>
        <div className={style.textContainer}>
          <p>
            Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
            abaixo agora!
          </p>
          <form action="#" method="POST">
            <div className={style.containerImput}>
              <input className={style.IF} type="text" placeholder="Digite o seu email aqui" />
              <div className={style.buttonWrapper}>
              <button className={style.buttonImput} type="submit">Cadratra-se</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     
      </div>
      <div className={style.miniImg}> 
        <div className={style.containerWrapper}>
          <div className={style.containerImg}>
            <img src={insta} alt="mini logo do instagram" />
            <img src={face} alt="mini logo do facebook" />
            <img src={twitter} alt="mini logo do twitter" />
          </div>
          <div className={style.txtP}>
            <p> © 2024 MATEL. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
