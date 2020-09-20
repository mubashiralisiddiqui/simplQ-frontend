import React from 'react';
import styles from '../../../styles/homePage.module.scss';
import { CreatorSlider, JoinerSlider } from '../../common/slider';

export const BenefitsInfo = () => (
  <div className={styles['benefits-info']}>
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-1']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-2']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-3']} />
    <h2>Why SimplQ ?</h2>
    <div className={styles['benefits-container']}>
      <div className={styles.benefit}>
        <img src="/images/minimize_crowding.svg" alt="mimimze crowding" />
        <p>Minimize crowds using a digital queue</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
        <p>Enforce social distancing effectively</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/check_status.svg " alt="Check your current status" />
        <p>Check your current status in the queue</p>
      </div>
    </div>
  </div>
);

export const HowToCreate = () => (
  <div className={styles.slider}>
    <h2>Create a Queue at the click of a button</h2>
    <CreatorSlider />
  </div>
);

export const HowToJoin = () => (
  <div className={styles.slider}>
    <h2>Join a queue without being there</h2>
    <JoinerSlider />
  </div>
);

export const ExtraInfo = () => (
  <div className={styles['extra-info']}>
    <table>
      <tr>
        <td>
          <img src="/images/free.svg" alt="free" />
        </td>
        <td>
          <img src="/images/secure.svg" alt="secure" />
        </td>
        <td>
          <img src="/images/easy.svg" alt="easy to use" />
        </td>
      </tr>
      <tr className={styles['img-descriptions']}>
        <td>Always free</td>
        <td>Data security</td>
        <td>Easy to use</td>
      </tr>
      <tr className={styles['detailed-descriptions']}>
        <td>
          We are a team of enthusiastic developers who want to give back to society and do not
          prioritize monetary gains
        </td>
        <td>Security is paramount and we take data security seriously</td>
        <td>
          We provide an easy queue management system thereby allowing you to focus on better things
        </td>
      </tr>
    </table>
  </div>
);

// export const ExtraInfo = () => (
//   <table className={styles['extra-info']}>
//     <div className={styles['card']}>
//       <tr>
//         <img src="/images/free.svg" alt="free" />
//       </tr>
//       <p className={styles['img-description']}>Always free</p>
//       <p className={styles['extra-description']}>
//         We are a team of enthusiastic developers who want to give back to society and do not
//         prioritize monetary gains
//       </p>
//     </div>
//     <div className={styles['card']}>
//       <img src="/images/secure.svg" alt="secure" />
//       <p className={styles['description']}>Data security</p>
//       <p className={styles['extra-description']}>
//         Security is paramount and we take data security seriously
//       </p>
//     </div>
//     <div className={styles['card']}>
//       <img src="/images/easy.svg" alt="easy to use" />
//       <p className={styles['description']}>Easy to use</p>
//       <p className={styles['extra-description']}>
//         We provide an easy queue management system thereby allowing you to focus on better things
//       </p>
//     </div>
//   </table>
// );
