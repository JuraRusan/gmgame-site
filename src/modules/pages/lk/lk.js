import "../../../Variables.scss";
import useAxios from '../../../DataProvider';
import AuthComponent from '../../components/auth-comp/Auth-comp-with-hook';
import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";

// import "../auth/Auth.scss";

const Lk = () => {
  const { cancel, data, error, loaded } = useAxios(
    "/api/me/",
    'GET',
    {}
  );

  
  if (loaded) {
    if (data.user?.status) {
      return (
        <div class="me-info-profile">
          <div class="border-line">
            <label><img src={`https://minotar.net/avatar/${data.user?.username}/100`} alt=
              "none"></img></label>
            <p>{data.user?.username}</p>
            <span>ник</span>
          </div>
          <div class="border-line">
            <label> </label>
            <p>mine.gmgame.ru</p>
            <span>адрес сервера</span>
          </div>
          <div class="border-line">
            <p> {data.version}</p>
            <span>версия</span>
          </div>
          <div class="border-line">
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-reg">
          <Header />
          <AuthComponent />
          <Fotter />
        </div>
      );
    }
  }
  return <span>Loading...</span>;
}

export default Lk;