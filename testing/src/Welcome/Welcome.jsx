// Componente Welcome, el cual contiene diversas característicasde inicio de sesión
import React from 'react';
import './Welcome.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Clock } from '../Clock/Clock';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
    // i18next se utiliza como un hook
    const [t, i18n] = useTranslation("global");

    return (
        <div className='backGnd'>
            <div className="logIn">
                <div className="user">
                    {/* icono que representa el Avatar de Usuario */}
                    <AccountCircleIcon sx={{ fontSize: 125 }} />
                </div>
                {/* Botón de "Settings" */}
                <center>
                    <button className='settings'><SettingsIcon className="spinner"/>{t("Welcome.setting")}</button>
                </center>
                <p className='welcome'>{t("Welcome.welcome")}</p>
                {/* div con la sección de cambiar idioma */}
                <div className='lenguage'>
                    <LanguageIcon/>
                    <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
                    <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
                </div>
                {/* Botón de cierre de sesión */}
                <button className="signOut">{t("Welcome.logout")}</button>
                {/* Componente de reloj y calendario */}
                <Clock />
            </div>
        </div>
    )
}
export default Welcome;