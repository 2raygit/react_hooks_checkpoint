import PropTypes from 'prop-types';
const Filter = ({ onFilter }) => {
    const handleTitleChange = (event) => {
      onFilter({ title: event.target.value });
    };
  
    const handleRatingChange = (event) => {
      onFilter({ rating: event.target.value });
    };
  
    return (
      <div className="filter">
        <input type="text" placeholder="Filter by title" onChange={handleTitleChange} />
        <input type="number" placeholder="Filter by rating" onChange={handleRatingChange} />
      </div>
    );
  };
  Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
  };
  export default Filter;