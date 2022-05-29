import propTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
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
