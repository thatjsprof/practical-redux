import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.test.data,
});

const TestComponent = (props) => {
  const { data } = props;

  return <div>Data from Redux: {data}</div>;
};

export default connect(mapStateToProps)(TestComponent);
