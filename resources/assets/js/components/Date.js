import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

class Dates extends React.Component {
  state = {
    selectedDay: new Date(),
    day: 0,
    disabledDates: []
  };
  isDisabled(day){
    var ret = $.inArray(day.toString(), this.state.disabledDates) > -1;
    console.log(ret + " " +day+ " " + this.state.disabledDates[0])
    return ret;
  }

  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
    this.setState(function(state) {
      return {
       disabledDates: state.disabledDates.concat(day.toString())
      }
    })
    console.log("day click " + day + " dates: " + this.state.disabledDates)
  }
  buttonClick(){
    console.log('click')
    if(this.state.day === 6){
      this.setState({day: 0})
    }else{
      this.setState({day:this.state.day +1});
    }

  }
  render() {
    return (
      <div>
        <DayPicker
          disabledDays={ day => this.isDisabled(day) }
          selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay) }
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <p>
          The selected day is { this.state.selectedDay.toLocaleDateString() }
        </p>
        <button onClick={this.buttonClick.bind(this)} >{ this.state.day }</button>
      </div>
    )
  }
}
export default Dates
