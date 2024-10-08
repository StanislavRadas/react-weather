import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { WeatherContext } from "../../App";
import "./index.css";
import back from "./icon/icon_back.svg"
import sunny from "../main/icon/icon_sunny.svg";
import drizzle from "../main/icon/icon_drizzle.svg";
import rain from "../main/icon/icon_rain.svg";
import snow from "../main/icon/icon_snow.svg";
import storm from "../main/icon/icon_storm.svg";
import clouds from "../main/icon/icon_clouds.svg";
import fog from "../main/icon/icon_fog.svg";

const City: React.FC = () => {

    const { setCity, setWeatherData, weatherData, city } = useContext(WeatherContext);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }
    
    const convertedTime = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleTimeString();
    };

    const day = new Date().toLocaleDateString();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();


    const IconWeather: React.FC<{ weatherData:any}> = ({weatherData}) => {
        const getIcon = (weatherMain: string) => {
            switch (weatherMain) {
                case "Clear":
                    return sunny;
                case "Clouds":
                    return clouds;
                case "Snow":
                    return snow;
                case "Rain":
                    return rain;
                case "Drizzle":
                    return drizzle;
                case "Thunderstorm":
                    return storm;
                case "Atmosphere":
                    return fog;
                default:
                    return sunny
            }
        }
        return (
        <div className="icon__weather--city">
            { weatherData && weatherData.weather && weatherData.weather[0] &&
            (<img src={getIcon(weatherData.weather[0].main)} alt={weatherData.weather[0].description} width={210} height={190} />)}
        </div>
        )
    }


    return (
        <div className="page">
            <div className="page__block">
                <div className="page__content--city">
                    <header className="header__city">
                        <div onClick={handleBack} className="icon__back">
                            <img src={back} alt="back" width={24} height={24} />
                        </div>
                        {weatherData && <IconWeather weatherData={weatherData} />}
                    </header>
                    <main className="main__city">
                        <div className="block__cityTemp">
                            <span className="title__city">{error ? error : (city ? city : <span className="loading-text">Loading city...</span>)}</span>
                            <span className="temparute">{error ? error : weatherData ? `${Math.round(weatherData.main.temp - 273.15)}°C` : <span className="loading-text">Loading weather...</span>}</span>
                            <span className="date">{day}, {hours}:{minutes}</span>
                        </div>
                        <div>
                            {error ? (
                                <div className="error">{error}</div>
                            ) : weatherData ? (
                                <div className="daily__info">
                                    <div className="tempInfo">
                                        <span className="stat">Temp min: {Math.round(weatherData.main.temp_min - 273.15)}°C</span> 
                                        <span className="stat">Temp max: {Math.round(weatherData.main.temp_max - 273.15)}°C</span>
                                    </div>
                                    <div className="tempInfo">
                                        <span className="stat">Sunrise: {convertedTime(weatherData.sys.sunrise)}</span> 
                                        <span className="stat">Sunset: {convertedTime(weatherData.sys.sunset)}</span>
                                    </div>  
                                    <div className="stat_vis">
                                        <span className="stat">Visibility: {weatherData.visibility / 1000} km</span> 
                                    </div>
                                    <div>
                                        <span className="stat">Clouds: {weatherData.clouds.all}%</span> 
                                    </div>    
                                </div>
                            ) : (
                                <div className="block__info__stats">
                                    <span className="loading-text stat">Loading weather data...</span>
                                    <span className="loading-text stat">Loading weather data...</span>
                                    <span className="loading-text stat">Loading weather data...</span>
                                </div>
                            )}
                        </div>
                        <div className="divider"></div>
                        <div className="stats__city">
                            {error ? (
                                <div className="error">{error}</div>
                            ) : weatherData ? (
                                <React.Fragment>
                                    <div className="stats__block">
                                            <span className="icon__stats">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0285 16.1645C11.7778 15.946 11.5726 15.4951 11.5726 15.1624V3.6047C11.5726 3.27215 11.3006 3.00014 10.9681 3.00014H10.1926C9.86007 3.00014 9.58805 3.27215 9.58805 3.6047L9.58792 15.1621C9.58792 15.4949 9.37457 15.9358 9.11395 16.1423C9.11395 16.1423 7.99994 17.0245 7.99994 17.8586C7.99994 19.1463 9.13312 20.1903 10.5309 20.1903C11.9285 20.1903 13.0615 19.1462 13.0615 17.8586C13.0615 17.0646 12.0285 16.1643 12.0285 16.1643L12.0285 16.1645Z" fill="white"/>
                                                <path d="M11.3216 6.35842C11.3216 6.69097 11.0496 6.96298 10.717 6.96298H10.4522C10.1197 6.96298 9.84764 6.69098 9.84764 6.35842L9.8475 3.86722C9.8475 3.53468 10.1195 3.26266 10.4521 3.26266H10.7169C11.0494 3.26266 11.3214 3.53467 11.3214 3.86722L11.3216 6.35842Z" fill="white"/>
                                                <path d="M14.5921 13.6013C14.5921 14.1723 14.1296 14.6349 13.5583 14.6349C12.9869 14.6349 12.5246 14.1725 12.5246 13.6013L13.5444 11.7406L14.5921 13.6013Z" fill="white"/>
                                                <path d="M15.7046 15.2926C15.7013 15.6241 15.4305 15.8899 15.0987 15.8867C14.7678 15.8838 14.5017 15.6128 14.505 15.2812L15.1071 14.2071L15.7046 15.2926Z" fill="white"/>
                                                <path d="M15.4869 12.641C15.4852 12.8385 15.3235 12.9971 15.1261 12.9951C14.9288 12.9932 14.7698 12.8317 14.772 12.6343L15.1312 11.9938L15.4869 12.641Z" fill="white"/>
                                                <path d="M12.0069 18.3375C11.9872 18.3372 12.0044 18.3371 12.045 18.3371C12.085 18.3371 11.9978 18.5814 11.8508 18.8797L11.8028 18.9767C11.656 19.275 11.3173 19.5193 11.0504 19.5193H10.5646H10.0793C9.81237 19.5193 9.47367 19.275 9.32662 18.9767L9.27867 18.8797C9.13161 18.5814 9.04483 18.3371 9.08554 18.3371C9.12653 18.3371 9.432 18.3371 9.76458 18.3374L11.4384 18.3376C11.7707 18.3376 12.0268 18.3375 12.0069 18.3375H12.0069Z" fill="white"/>
                                                <path d="M10.3447 18.0755C9.95943 18.0533 9.73911 17.929 9.54197 17.5552C9.34482 17.181 9.36853 17.0372 9.56741 16.5997L9.5796 16.6011C10.0438 16.6842 10.1746 16.7483 10.3695 17.1197C10.5673 17.4932 10.5447 17.7457 10.3446 18.0753" fill="white"/>
                                                <path d="M10.7963 17.01C10.6246 17.0002 10.5264 16.9448 10.4387 16.7783C10.351 16.6119 10.3614 16.5477 10.4502 16.3529L10.4553 16.3533C10.6621 16.3904 10.7205 16.4192 10.8069 16.5844C10.8947 16.7506 10.8847 16.8632 10.7956 17.01" fill="white"/>
                                                <path d="M11.0178 18.0755C10.8425 17.8603 10.8015 17.6826 10.9045 17.3962C11.008 17.1098 11.0958 17.0529 11.4248 16.946L11.4295 16.9535C11.6111 17.2403 11.6399 17.341 11.5381 17.6246C11.4352 17.911 11.2898 18.021 11.0178 18.0747" fill="white"/>
                                                </svg>
                                            </span>
                                        <span className="stat">Pressure: {weatherData.main.pressure} mbar</span>
                                    </div>
                                    <div className="stats__block">
                                        <span className="icon__stats">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90778 9.00997C8.92419 8.59868 9.46792 7.46914 9.05502 6.44872C8.64332 5.43232 5.87944 3.99983 5.87944 3.99983C5.87944 3.99983 4.88741 6.95297 5.29884 7.96909C5.71188 8.98964 6.88843 9.42264 7.90778 9.00984V9.00997Z" fill="white"/>
                                            <path d="M12.1647 15.0288C12.1647 15.0288 11.1444 17.9035 11.5557 18.9196C11.9685 19.9389 13.1422 20.3742 14.1617 19.9614C15.181 19.5488 15.7213 18.4196 15.3087 17.4003C14.8972 16.3839 12.1647 15.0287 12.1647 15.0287V15.0288Z" fill="white"/>
                                            <path d="M5.78 13.8796C5.78 13.8796 4.66064 16.976 5.10379 18.0706C5.54802 19.168 6.83747 19.6474 7.93502 19.2028C9.02962 18.7597 9.54271 17.5511 9.09833 16.4535C8.65488 15.359 5.78 13.8796 5.78 13.8796V13.8796Z" fill="white"/>
                                            <path d="M12.1407 12.9415C12.7656 12.6885 13.0139 11.9518 12.7921 11.404C12.5379 10.776 10.9367 9.96761 10.9367 9.96761C10.9367 9.96761 10.3481 11.6626 10.6022 12.2909C10.824 12.8384 11.5139 13.1953 12.1407 12.9415H12.1407Z" fill="white"/>
                                            <path d="M18.2747 12.6813C18.0205 12.0533 16.4193 11.2449 16.4193 11.2449C16.4193 11.2449 15.8307 12.9399 16.0849 13.5681C16.3067 14.1158 16.9967 14.4727 17.6233 14.219C18.2483 13.9658 18.4968 13.229 18.2747 12.6812L18.2747 12.6813Z" fill="white"/>
                                            <path d="M17.0525 6.63637C16.641 5.62011 13.877 4.18762 13.877 4.18762C13.877 4.18762 12.885 7.14074 13.2964 8.15687C13.7096 9.17741 14.8861 9.61013 15.9054 9.1975C16.9215 8.78635 17.4655 7.65705 17.0525 6.63627V6.63637Z" fill="white"/>
                                            <path d="M19.8018 18.7413C19.5476 18.1133 17.9464 17.3049 17.9464 17.3049C17.9464 17.3049 17.3578 18.9999 17.612 19.6282C17.8338 20.1758 18.5236 20.5327 19.1504 20.2788C19.7752 20.0258 20.0236 19.2891 19.8018 18.7413H19.8018Z" fill="white"/>
                                            </svg>
                                        </span>
                                            <span className="stat">Humidity: {weatherData.main.humidity}%</span>
                                    </div>
                                    <div className="stats__block">
                                        <span className="icon__stats">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.93281 10.3757H11.6101C12.5389 10.3824 13.4375 10.0458 14.1334 9.43059C14.8293 8.81533 15.2736 7.96474 15.3808 7.04211C15.4842 6.00589 15.1408 4.97465 14.4366 4.20737C13.7375 3.43982 12.7479 3.00161 11.7097 2.99986H9.63812C9.3049 2.99986 8.99701 3.17772 8.83038 3.46622C8.66377 3.75483 8.66377 4.11041 8.83038 4.39903C8.99699 4.68751 9.3049 4.86538 9.63812 4.86538H11.7097C12.2347 4.86605 12.734 5.09306 13.08 5.48801C13.4258 5.88298 13.5849 6.40782 13.5163 6.92842C13.4476 7.37506 13.2191 7.78155 12.8732 8.07229C12.5274 8.36318 12.0877 8.51842 11.6359 8.50943H3.93264C3.59942 8.50943 3.29153 8.68716 3.1249 8.97579C2.95827 9.26442 2.95829 9.61984 3.1249 9.90846C3.29151 10.1971 3.59942 10.3748 3.93264 10.3748L3.93281 10.3757Z" fill="white"/>
                                            <path d="M20.9834 16.5293C20.8762 15.6067 20.4321 14.7562 19.7363 14.1411C19.0404 13.5258 18.142 13.1891 17.2132 13.1957H10.8001C10.4668 13.1957 10.159 13.3734 9.99233 13.6621C9.82572 13.9507 9.82572 14.3063 9.99233 14.5947C10.1589 14.8834 10.4668 15.0611 10.8001 15.0611H17.2386C17.6903 15.0521 18.13 15.2075 18.4758 15.4982C18.8218 15.7891 19.0502 16.1956 19.1189 16.6421C19.1875 17.1627 19.0285 17.6875 18.6826 18.0825C18.3366 18.4776 17.8374 18.7045 17.3124 18.7053H15.24C14.9067 18.7053 14.5989 18.883 14.4322 19.1716C14.2656 19.4601 14.2656 19.8157 14.4322 20.1043C14.5988 20.3929 14.9067 20.5707 15.24 20.5707H17.3114C18.3501 20.5697 19.3405 20.1318 20.04 19.3641C20.7439 18.5967 21.087 17.5655 20.9832 16.5294L20.9834 16.5293Z" fill="white"/>
                                            <path d="M8.74482 14.1293C8.74469 13.8818 8.64638 13.6446 8.4716 13.4696C8.29669 13.2945 8.05949 13.196 7.81215 13.1957H3.93272C3.59951 13.1957 3.29162 13.3734 3.12499 13.662C2.95838 13.9507 2.95838 14.3062 3.12499 14.5947C3.29159 14.8833 3.5995 15.0611 3.93272 15.0611H7.81215C8.05925 15.0608 8.29616 14.9625 8.47095 14.7879C8.64574 14.6132 8.7443 14.3764 8.74484 14.1293L8.74482 14.1293Z" fill="white"/>
                                            <path d="M15.7052 10.9781C15.7847 10.9781 15.8611 10.9465 15.9173 10.8903L16.5495 10.2581H16.5493C17.4181 10.4303 18.3143 10.1413 18.9188 9.49404C19.5233 8.84676 19.7505 7.93311 19.5193 7.07809C19.4917 6.97417 19.4106 6.893 19.3067 6.86541C18.4516 6.63439 17.538 6.86153 16.8907 7.46596C16.2434 8.07053 15.9544 8.96665 16.1267 9.83542L15.4931 10.4657C15.4073 10.5515 15.3816 10.6805 15.4281 10.7926C15.4746 10.9047 15.5839 10.9777 15.7052 10.9778L15.7052 10.9781Z" fill="white"/>
                                            <path d="M9.23133 16.3243L8.59917 15.6921C8.48145 15.5784 8.29435 15.5801 8.17862 15.6959C8.06289 15.8116 8.06129 15.9987 8.175 16.1164L8.80676 16.7486V16.7484C8.64403 17.5851 8.90573 18.4479 9.50574 19.0531C10.1297 19.6705 11.5245 20.1949 12.1997 19.5031H12.1999C12.4306 18.6484 12.2036 17.7351 11.5996 17.088C10.9954 16.4407 10.0998 16.1516 9.23132 16.3231L9.23133 16.3243Z" fill="white"/>
                                            </svg>
                                        </span>
                                        <span className="stat">Wind: {weatherData.wind.speed} km/h</span>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <div className="loading-text stat">Loading...</div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default City;