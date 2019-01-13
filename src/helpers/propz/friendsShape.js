import PropTypes from 'prop-types';

const friendsShape = PropTypes.shape({
  name: PropTypes.string.isRequired, 
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  isAvoiding: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default friendsShape;
