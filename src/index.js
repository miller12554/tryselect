import React from "react";
import ReactDOM from "react-dom";
import Select, { components } from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const MultiValueLabel = props => {
  return (
    <components.MultiValueLabel
      {...props}
      innerProps={{
        ...props.innerProps,
        onClick: e => {
          e.stopPropagation(); // doesn't do anything, sadly
          e.preventDefault(); // doesn't do anything, sadly
          // still unsure how to preven the menu from opening
          alert(props.data.label);
        }
      }}
    />
  );
};

class App extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        components={{ MultiValueLabel }}
        options={options}
        onChange={this.handleChange}
        closeMenuOnSelect={false}
        isMulti
      />
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
