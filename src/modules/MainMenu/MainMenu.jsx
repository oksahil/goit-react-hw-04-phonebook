import { useState } from "react";
import PropTypes from "prop-types";

import css from "./mainMenu.module.css";

const MainMenu = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handelClick = ind => setActiveIndex(ind);

    const elementMenu = items.map(({ id, title, link }, index) => 
            <li key={id}>
                <a onClick={()=> handelClick(index)} className={activeIndex === index ? `${ css.link } ${ css.active }` : css.link} href = {link}>{title}</a>
            </li>
        )
        return (
            <ul className={css.menu}>
                {elementMenu}
            </ul>
        )    
    }

MainMenu.defaultProps = {
    items: []
}

export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
   })) 
}