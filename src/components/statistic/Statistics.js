import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import ProfileItem from '../profile/profileItem/ProfileItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(item => {
          return <ProfileItem key={item.id} param={item.label} value={item.percentage} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
