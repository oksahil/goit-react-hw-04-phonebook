import { Component } from "react";
import PropTypes from "prop-types";
import css from "./mainMenu.module.css";

class MainMenu extends Component {

    static defaultProps = {
        items: []
    }

    state = {
        activeIndex: 1,
    }

handelClick = (ind) => {
    this.setState({ activeIndex: ind})
}

    render(){
    const { items } = this.props;
    const { activeIndex } = this.state;
        const elementMenu = items.map(({ id, title, link }, index) => 
            <li key={id}>
                <a onClick={()=> this.handelClick(index)} className={activeIndex === index ? `${ css.link } ${ css.active }` : css.link} href = {link}>{title}</a>
            </li>
        )
        return (
            <ul className={css.menu}>
                {elementMenu}
            </ul>
        )    
    }
}

export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
   })) 
}