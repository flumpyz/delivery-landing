import cx from 'classnames';
import s from './style.module.css';


function showBackground() {
    let background = document.createElement('div');
    background.className = "backgroundWindow";

    document.body.append(background);
}

export default showBackground;