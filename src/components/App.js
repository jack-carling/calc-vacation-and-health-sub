import React from "react";
import DatePicker from "react-date-picker";
import {
  calculateHealthCareSub,
  calculateNumberOfVacationDaysNextPeriod,
  calculateNumberOfVacationDaysThisPeriod,
} from "../logic/calc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      healtCareSubThisYear: 0,
      vacationDaysNextPeriod: 0,
      vacationDaysThisPeriod: 0,
      message: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  setHealthCareSub(date) {
    if (date.getFullYear() < new Date().getFullYear()) {
      this.setState({
        healtCareSubThisYear: 5000,
        message:
          "Eftersom du började förra året så har du fullt friskvårdsbidrag i år.",
      });
    } else {
      this.setState({
        healtCareSubThisYear: calculateHealthCareSub(date),
        message: "Baserat på antal dagar du kommer att jobba i år.",
      });
    }
  }

  setVactationDays(startingDate) {
    this.setState({
      vacationDaysNextPeriod:
        calculateNumberOfVacationDaysNextPeriod(startingDate),
    });
    this.setState({
      vacationDaysThisPeriod:
        calculateNumberOfVacationDaysThisPeriod(startingDate),
    });
  }

  onDateChange(date) {
    this.setState({
      startDate: date,
    });
    this.setHealthCareSub(date);
    this.setVactationDays(date);
  }

  renderMessage() {
    if (this.state.message) {
      return <h5 className="ui info message">{this.state.message}</h5>;
    }
  }

  render() {
    function getYearOfNextVacationPeriod() {
      let firstDayOfVacationYear = new Date(new Date().getFullYear(), 3, 1);
      if (new Date().getMonth() >= 3) {
        firstDayOfVacationYear = new Date(new Date().getFullYear() + 1, 3, 1);
      }
      return firstDayOfVacationYear.getFullYear();
    }

    function getYearOfThisVacationPeriod() {
      let firstDayOfVacationYear = new Date(new Date().getFullYear() - 1, 3, 1);
      if (new Date().getMonth() >= 3) {
        firstDayOfVacationYear = new Date(new Date().getFullYear(), 3, 1);
      }
      return firstDayOfVacationYear.getFullYear();
    }

    return (
      <div className="ui container">
        <h1 className="ui header">Friskvårdsbidragsuträknare</h1>
        <div className="sub header">
          Välj ett startdatum för att räkna ut hur mycket Friskvårdsbidrag du är
          berättigad till i år.
        </div>
        <div style={{ paddingTop: "30px" }}>
          <DatePicker
            onChange={this.onDateChange}
            value={this.state.startDate}
          />
        </div>
        <h2 className="ui icon header">
          <div className="content">
            Friskvårdsbidrag: {this.state.healtCareSubThisYear}
          </div>
          <div className="content">
            Semester period 1/4/{getYearOfThisVacationPeriod()}-31/3/
            {getYearOfThisVacationPeriod() + 1}:{" "}
            {this.state.vacationDaysThisPeriod}
          </div>
          <div className="content">
            Semester period 1/4/{getYearOfNextVacationPeriod()}-31/3/
            {getYearOfNextVacationPeriod() + 1}:{" "}
            {this.state.vacationDaysNextPeriod}
          </div>
        </h2>
        {this.renderMessage()}
      </div>
    );
  }
}

export default App;
