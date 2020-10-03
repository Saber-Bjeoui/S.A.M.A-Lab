import React from "react";
import axios from "axios";
class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: {
        title: "",
        description: "",
        state: "planned",
        posterID: "1",
        projectID: this.props.projectID,
      },
      features: [],
    };
    this.getFeatures = this.getFeatures.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.addFeature = this.addFeature.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getFeatures() {
    axios
      .get(`/project/${this.state.feature.projectID}/features`)
      .then((res) => {
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
    this.state.feature[name] = value;
    this.setState({
      feature: this.state.feature,
    });
  }
  addFeature(e) {
    e.preventDefault();
    console.log(this.state.feature);
    axios.post("/features/add", this.state.feature).then((res) => {
      this.getFeatures();
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
          <form>
            <h2>add features</h2>
            <label>title</label>
            <input type="text" name="title" onChange={this.handleChange} />
            <label>description</label>
            <input
              type="textarea"
              name="description"
              onChange={this.handleChange}
            />
            <input type="submit" onClick={this.addFeature} />
          </form>
        </div>

        <div>
          <ul className="list-group">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {feature.title}
                <span className="badge badge-success badge-pill">
                  {feature.state}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default FeaturesList;
