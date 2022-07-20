import "../../../Variables.scss";
import useAxios from '../../../DataProvider';

const Lk = () => {
  const { cancel, data, error, loaded } = useAxios(
    "/api/me/",
    'GET',
    {}
  );

  if (loaded) {
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
    );
  }
  return <span>Loading...</span>;
}

export default Lk;