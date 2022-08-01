import "./main.scss"
import coffee from "../../assets/images/coffee.png"
import box from "../../assets/images/box.png"
import timing from "../../assets/images/timing.png"

import "./main.scss";

const index = () => {
  return<>

  <section className="about">
    <div className="about__container container">

      <p className="about__top__text">Neler <span>Yapıyoruz?</span></p>
      <h2 className="about__heading">3 adımda çalışma sürecimiz</h2>
      <p className="about__desc">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>

      <ul className="about__list">

        <li className="about__item">
          <img src={coffee} width={64} height={64} alt="cup of coffee"/>
          <h3 className="about__item__title">Keşif ve Planlama</h3>
          <p className="about__item__text">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
        </li>

        <li className="about__item">
          <img src={box} width={64} height={64} alt="cup of coffee"/>
          <h3 className="about__item__title">Tasarım ve Geliştirme</h3>
          <p className="about__item__text">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
        </li>

        <li className="about__item">
          <img src={timing} width={64} height={64} alt="cup of coffee"/>
          <h3 className="about__item__title">Test ve Yayına Alma</h3>
          <p className="about__item__text">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
        </li>

      </ul>

    </div>
  </section>
    
  </>
};

export default index;
