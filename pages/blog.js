import React, { use, useState } from 'react'
import styles from '../styles/BlogMenuPage.module.css';
import Image from 'next/image';
import TopButton from '@/components/TopButton'
import { FaRegTimesCircle } from "react-icons/fa";


function Blog() {

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const popupOpen = () => {
    setPopupIsOpen(true)
  }

  const popupClose = () => {
    setPopupIsOpen(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>NASA Has Found Hundreds Of Potential New Planets</h2>
            <p className={styles.card_snippet}>NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>This Is Your Body And Brain On Coffee</h2>
            <p className={styles.card_snippet}>Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

</figcaption>
</figure>
</div>
{
popupIsOpen && (
<div className={styles.popup}>
  <div className={styles.content}>
    <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
    <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
    <div className={styles.card_creator}>
      <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
    </div>
  </div>
</div>
)
}
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Why You Should Bring Your Dog To Work</h2>
            <p className={styles.card_snippet}>On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>NASA Has Found Hundreds Of Potential New Planets</h2>
            <p className={styles.card_snippet}>NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

</figcaption>
</figure>
</div>
{
popupIsOpen && (
<div className={styles.popup}>
  <div className={styles.content}>
    <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
    <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
    <div className={styles.card_creator}>
      <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
    </div>
  </div>
</div>
)
}
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>This Is Your Body And Brain On Coffee</h2>
            <p className={styles.card_snippet}>Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Why You Should Bring Your Dog To Work</h2>
            <p className={styles.card_snippet}>On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

</figcaption>
</figure>
</div>
{
popupIsOpen && (
<div className={styles.popup}>
  <div className={styles.content}>
    <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
    <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
    <div className={styles.card_creator}>
      <Image src='/img/chef.png' className={styles.chef} width={50} height={50} alt=''></Image><span className={styles.name}>by Pizza Chef</span>
    </div>
  </div>
</div>
)
}
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>NASA Has Found Hundreds Of Potential New Planets</h2>
            <p className={styles.card_snippet}>NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

</figcaption>
</figure>
</div>
{
popupIsOpen && (
<div className={styles.popup}>
  <div className={styles.content}>
    <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
    <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
    <div className={styles.card_creator}>
      <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
    </div>
  </div>
</div>
)
}
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>This Is Your Body And Brain On Coffee</h2>
            <p className={styles.card_snippet}>Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

          </figcaption>
        </figure>
      </div>
      {
        popupIsOpen && (
          <div className={styles.popup}>
            <div className={styles.content}>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
              <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
              <div className={styles.card_creator}>
                <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
              </div>
            </div>
          </div>
        )
      }
      <div className={styles.card}>
        <figure className={styles.card_thumb}>
          <img src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img} width={300} height={400} />
          <figcaption className={styles.card_caption}>
            <h2 className={styles.card_title}>Why You Should Bring Your Dog To Work</h2>
            <p className={styles.card_snippet}>On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
            <button className={styles.card_button} onClick={popupOpen}>Read more</button>

</figcaption>
</figure>
</div>
{
popupIsOpen && (
<div className={styles.popup}>
  <div className={styles.content}>
    <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, nisi a condimentum finibus, mauris magna consequat magna, eget pretium odio felis sed nunc. Donec sapien neque, vehicula sit amet justo vel, efficitur sagittis mauris. Sed tempor odio quis dui pretium finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet nec nisl cursus auctor. Curabitur eros libero, accumsan eu turpis eget, placerat pellentesque nisl. Phasellus elementum semper commodo. Maecenas id ex rutrum, lobortis nunc non, rutrum ipsum. Cras euismod tempus mi, eu consectetur ipsum convallis nec. Nunc vel est eu nisi ullamcorper egestas. Fusce sit amet neque blandit, gravida tortor vitae, tincidunt sapien.</p>
    <button className={styles.btn} onClick={popupClose}><FaRegTimesCircle /></button>
    <div className={styles.card_creator}>
      <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image><span className={styles.name}>by Pizza Chef</span>
    </div>
  </div>
</div>
)
}
      <TopButton />
    </div>

  )
}

export default Blog