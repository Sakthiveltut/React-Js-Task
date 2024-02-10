import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import 'daterangepicker';
import 'bootstrap-daterangepicker';
import 'daterangepicker/daterangepicker.css'; 
import 'bootstrap-daterangepicker/daterangepicker.css';

class DateRangePickerComponent extends Component {

  componentDidMount() {

    // Initialize the date range picker but keep it hidden
    $('#reportrange').daterangepicker({
      autoUpdateInput: true,
      opens: 'left',
      showDropdowns: true,
     showChevrons: false,
     startDate: moment().startOf('month'),
      // Do not auto-update the input field
    });

    // Handle the date range picker's apply event
    $('#reportrange').on('apply.daterangepicker', (event, picker) => {
      $('#reportrange span').html(picker.startDate.format('MMMM D, YYYY') + ' - ' + picker.endDate.format('MMMM D, YYYY'));
    });
  }



  handleButtonClick = () => {
    // Show the date range picker when the button is clicked
    $('#reportrange').data('daterangepicker').show();
  }

  handleClearClick = () => {
    // Clear the date range when the Clear button is clicked
    $('#reportrange').data('daterangepicker').setStartDate(moment());
    $('#reportrange').data('daterangepicker').setEndDate(moment());
    $('#reportrange span').html('');
  }

  handleNowClick = () => {
    // Set the date range to the current date when the Now button is clicked
    $('#reportrange').data('daterangepicker').setStartDate(moment());
    $('#reportrange').data('daterangepicker').setEndDate(moment());
    $('#reportrange span').html(moment().format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Show Date Range Picker</button>
        <div id="reportrange" style={{ position: 'absolute', top: '100px', right: '50px', display: 'none' }}>
          <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
          <span></span> <b className="caret"></b>
          <div>
            <button onClick={this.handleClearClick}>Clear</button>
            <button onClick={this.handleNowClick}>Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DateRangePickerComponent;
