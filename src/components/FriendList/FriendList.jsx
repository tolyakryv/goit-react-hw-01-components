import propTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={s.item} key={id}>
            <span
              className={s.status}
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
    }),
  ),
};
