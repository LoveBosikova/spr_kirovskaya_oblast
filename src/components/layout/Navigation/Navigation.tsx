import style from './navigation.module.scss';
import { NavLink } from 'react-router';

function Navigation () {

    return (
        <nav className={style.navigation}>
            <ul className={style.linksWrap}>
                <NavLink to={'spr_kirovskaya_oblast/about'} end>
                    <li className={style.linkWrap}><p className={style.link}>О нас</p></li>
                </NavLink>
                <NavLink to={'spr_kirovskaya_oblast/projects'} end>
                    <li className={style.linkWrap}><p className={style.link}>Наши проекты</p></li>
                </NavLink>
                <NavLink to={'spr_kirovskaya_oblast/partners'} end>
                    <li className={style.linkWrap}><p className={style.link}>Партнёры</p></li>
                </NavLink>
                <NavLink to={'spr_kirovskaya_oblast/public'} end>
                    <li className={style.linkWrap}><p className={style.link}>Отчёты</p></li>
                </NavLink>
                <NavLink to={'spr_kirovskaya_oblast/sertificates'} end>
                    <li className={style.linkWrap}><p className={style.link}>Награды</p></li>
                </NavLink>
                <NavLink to={'spr_kirovskaya_oblast/contacts'} end>
                    <li className={style.linkWrap}><p className={style.link}>Контакты</p></li>
                </NavLink>
                <NavLink to={'utv/news'} end>
                    <li className={style.linkWrap}><p className={style.link}>Новости</p></li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;

// О нас 
// Наши проекты
// Партнёры
// Отчёты
// Награды
// Контакты