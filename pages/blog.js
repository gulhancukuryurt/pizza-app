import React, {useState } from 'react'
import styles from '../styles/BlogMenuPage.module.css';
import Image from 'next/image';
import TopButton from '@/components/TopButton'
import { FaRegTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Blog() {

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const popupOpen = () => {
    setPopupIsOpen(true)
  }

  const popupClose = () => {
    setPopupIsOpen(false)
  }
  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      translateY: 20
    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={styles.container}>
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>
          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popupContainer}>
            <div className={styles.popup}>
              <div className={styles.content}>
                <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
                <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
                <div className={styles.card_creator}>
                  <Image src='/img/chef.png' alt='chef' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
                </div>
              </div>
            </div>
          </div>

        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef1' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef2' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef3' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef4' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef5' className={styles.chef} width={50} height={50} ></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef6' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef7' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <motion.div
        variants={item}
        className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Pizza Blog Header</h2>
            <p className={styles.card_snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat aliquet mi, non scelerisque lorem rutrum sit amet. In hac habitasse platea dictumst.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </motion.div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' alt='chef8' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <TopButton />
    </motion.div>

  )
}

export default Blog