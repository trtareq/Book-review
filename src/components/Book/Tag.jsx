import PropTypes from 'prop-types';

const Tag = ({tag}) => {

    return (
        <div className=" bg-slate-200 p-2 rounded-3xl text-green-400 font-bold text-xs ">
            #{tag}
        </div>
    );
};

Tag.propTypes = {
    tag: PropTypes.string
  };
export default Tag;