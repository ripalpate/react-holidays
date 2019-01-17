import PropTypes from 'prop-types';

const holidaysShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default holidaysShape;
