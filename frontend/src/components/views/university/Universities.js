import React from "react";
import FormButton from "../../utilities/FormButton";

class Universities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      universities: [
        {
          name: "Kamuzu University of Health Sciences",
          code: "KUHES",
          isSelected: false,
        },
        {
          name: "Malawi University of Business and Applied Sciences",
          code: "MUBAS",
          isSelected: false,
        },
        {
          name: "University of Malawi",
          code: "UNIMA",
          isSelected: false,
        },
        {
          name: "Malawi University of Science and Technology",
          code: "MUST",
          isSelected: false,
        },
        {
          name: "Mzuzu University",
          code: "MZUNI",
          isSelected: false,
        },
        {
          name: "Lilongwe University of Agriculture and Natural Resources",
          code: "UNIMA",
          isSelected: false,
        },
      ],

      selectedUniversities: [],
    };

    this.selectAll = this.selectAll.bind(this);
    this.selectUniversity = this.selectUniversity.bind(this);
  }

  selectAll(event) {
    let selectedUniversities = this.state.universities;
    selectedUniversities.forEach(
      (selectedUniversity) =>
        (selectedUniversity.isSelected = event.target.checked)
    );
    this.setState({ universities: selectedUniversities });
    this.state.selectedUniversities.push(selectedUniversities);
    console.log(this.state.selectedUniversities);
  }

  selectUniversity(event) {
    let code = event.target.id;
    let selectedUniversity = this.state.universities.filter(
      (university) => university.code === code
    );

    this.setState(this.state.universities.filter(selectedUniversity), {
      isSelected: true,
    });
    this.state.selectedUniversities.push(selectedUniversity);
    console.log(this.state.selectedUniversities);
  }

  render() {
    return (
      <div className="mx-auto flex flex-row justify-center rounded-lg bg-ivory p-6">
        <form className="flow-root w-auto p-2">
          <p className="mb-3 text-xl font-bold">
            Choose which public university you are interested in: (Select all
            that apply)
          </p>

          <div className="mb-1">
            <input
              type="checkbox"
              id="all"
              className="mr-2 h-3 w-3 rounded-sm accent-space"
              onClick={this.selectAll}
            />
            <label className="text-base font-semibold" for="all">
              Select all
            </label>
          </div>

          {this.state.universities.map((university) => (
            <div className="mb-1">
              <input
                type="checkbox"
                id={university.code}
                checked={university.isSelected}
                className="mr-2 h-3 w-3 rounded-sm accent-space"
                onClick={this.selectUniversity}
              />
              <label className="text-base" for={university.code}>
                {university.name}
              </label>
            </div>
          ))}

          <FormButton />
        </form>
      </div>
    );
  }
}

export default Universities;
