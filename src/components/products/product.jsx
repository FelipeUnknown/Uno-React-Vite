import style from "../products/product.module.css";
import UnoBarbie from "../../assets/img/uno-barbie.png";
import UnoFlip from "../../assets/img/uno-flip.png";
import UnoDos from "../../assets/img/uno-dos.png";
import UnoMasters from "../../assets/img/uno-masters.png";
import UnoMinimalista from "../../assets/img/uno-minimalista.png";
import UnoOriginal from "../../assets/img/uno-original.png";
const Product = () => {
  return (
    <section className={style.Product}>
      <div className={style.prodWrapper}>
        <div className={style.productTitle}>
          <h2>Descobrir</h2>
          <div>
            <a href="/" className={style.filterBtn}>
              Filtrar
            </a>
          </div>
        </div>
        <div className={style.prodContent}>
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoFlip} className={style.cardUno} />
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
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoDos} className={style.cardUno} />
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
          <div className={style.prodCards}>
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
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoMasters} className={style.cardUno} />
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
        {/* Section cards 2 V */}
        <div className={style.prodContent}>
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoMasters} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Masters <span>R$ 34,99</span>
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
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoBarbie} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Dos<span>R$ 23,99</span>
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
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoMinimalista} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Original<span>R$ 80,00</span>
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
          <div className={style.prodCards}>
            <div className={style.cardDiv}>
              <img src={UnoFlip} className={style.cardUno} />
            </div>
            <div className={style.cardTxt}>
              <h3>
                UNO® Masters<span>R$ 104,99</span>
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
        <div className={style.verMaisBtnDiv}>
          <a className={style.verMaisBtn} href="/">VER MAIS</a>
        </div>
      </div>
    </section>
  );
};
export default Product;
