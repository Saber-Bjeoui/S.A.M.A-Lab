import React from "react";
import axios from "axios";
class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      state: "new",
      postedID: "1",
      projectID: 1,
      features: [],
    };
    this.getFeatures = this.getFeatures.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.addFeature = this.addFeature.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getFeatures() {
    axios.get(`/get_features/${1}`).then((res) => {
      this.setState({
        features: res.data,
      });
    });
  }
  componentDidMount() {
    this.getFeatures();
  }
  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  addFeature() {
    axios.post("/create_feature", this.state).then((res) => {
      console.log(res);
    });
  }
  update(id) {
    axios.put(`/update_feature/${id}`).then((res) => {
      console.log(res.data);
    });
  }
  delete(id) {
    axios.post(`/delete_features/${id}`).then((res) => {
      this.getFeatures();
    });
  }
  render() {
    let features = this.state.features;
    return (
      <div>
        <div>
          <form onSubmit={this.addFeature}>
            <h2>add features</h2>
            <label>title</label>
            <input type="text" name="title" onChange={this.handleChange} />
            <label>description</label>
            <input
              type="textarea"
              name="description"
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
        <div>
          <h2>project features</h2>
          <ul>
            {features.map((element, key) => (
              <li key={key}>
                <h2>{element.title}</h2>
                <h3>{element.postedID}</h3>
                <h3>{element.projectID}</h3>
                <span>{element.description}</span>
                <h3>{element.state}</h3>
                <button
                  onClick={() => this.update(element.id)}
                  name={element.projectID}
                >
                  update
                </button>
                <button
                  onClick={() => this.delete(element.id)}
                  name={this.state.id}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default FeaturesList;
