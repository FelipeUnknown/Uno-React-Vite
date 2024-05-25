import style from "../section-models/models.module.css";
import UnoMinimalista from "../../assets/img/uno-minimalista.png";
import UnoFlip from "../../assets/img/uno-flip.png";
import UnoOriginal from "../../assets/img/uno-original.png";
import UnoDos from "../../assets/img/uno-dos.png";

const Models = () => {
  return (
    <section className={style.Models}>
      <div className={style.modelsWrapper}>
        <div className={style.modelsTitle}>
          <h2>Nossos novos modelos</h2>
          <div className={style.btnDiv}>
            <a href="/" className={style.verMaisBtn}>
              Filtrar →
            </a>
          </div>
        </div>
        <div className={style.modelsContent}>
          <div className={style.modelsCards}>
            <div className={style.cardDiv}>
              <img src={UnoMinimalista} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Flip SIOC <span>R$ 104,99</span>
              </h3>
              <div className={style.supTxt}>
                <p>
                  Acaba em <span>01.34.45</span>
                </p>
                <a href="/" className={style.buybtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className={style.modelsCards}>
            <div className={style.cardDiv}>
              <img src={UnoFlip} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Dos<span>R$ 50,00</span>
              </h3>
              <div className={style.supTxt}>
                <p>
                  Acaba em <span>01.34.45</span>
                </p>
                <a href="/" className={style.buybtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className={style.modelsCards}>
            <div className={style.cardDiv}>
              <img src={UnoOriginal} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Original<span>R$ 29,90</span>
              </h3>
              <div className={style.supTxt}>
                <p>
                  Acaba em <span>01.34.45</span>
                </p>
                <a href="/" className={style.buybtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className={style.modelsCards}>
            <div className={style.cardDiv}>
              <img src={UnoDos} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Masters<span>R$ 34,99</span>
              </h3>
              <div className={style.supTxt}>
                <p>
                  Acaba em <span>01.34.45</span>
                </p>
                <a href="/" className={style.buybtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
