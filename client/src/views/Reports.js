import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import ReportCard from '../components/ReportCard';
import {
  getReportDay, getReportMonth, getReportWeek, getReportYear
} from '../helpers/data/reportData';

function Reports() {
  const [dayReport, setDayReport] = useState(null);
  const [weekReport, setWeekReport] = useState(null);
  const [monthReport, setMonthReport] = useState(null);
  const [yearReport, setYearReport] = useState(null);
  const [viewDay, setViewDay] = useState(false);
  const [viewWeek, setViewWeek] = useState(false);
  const [viewMonth, setViewMonth] = useState(false);
  const [viewYear, setViewYear] = useState(false);

  useEffect(() => {
    getReportDay().then((day) => setDayReport(day));
    getReportWeek().then((week) => setWeekReport(week));
    getReportMonth().then((month) => setMonthReport(month));
    getReportYear().then((year) => setYearReport(year));
  }, []);

  const handleClick = (type) => {
    switch (type) {
      case 'day':
        setViewDay(true);
        setViewWeek(false);
        setViewMonth(false);
        setViewYear(false);
        break;
      case 'week':
        setViewDay(false);
        setViewWeek(true);
        setViewMonth(false);
        setViewYear(false);
        break;
      case 'month':
        setViewDay(false);
        setViewWeek(false);
        setViewMonth(true);
        setViewYear(false);
        break;
      case 'year':
        setViewDay(false);
        setViewWeek(false);
        setViewMonth(false);
        setViewYear(true);
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <h3>Sales Report History</h3>
      <Button className='mt-1 mx-1' color='info' onClick={() => handleClick('day')}>Daily Report</Button>
      <Button className='mt-1 mx-1' color='info' onClick={() => handleClick('week')}>Weekly Report</Button>
      <Button className='mt-1 mx-1' color='info' onClick={() => handleClick('month')}>Monthly Report</Button>
      <Button className='mt-1 mx-1' color='info' onClick={() => handleClick('year')}>Year Report</Button>
      <div className='report-container'>
        {
          viewDay && <ReportCard
          reportTitle={'Daily Sales'}
          totalRevenue={dayReport.totalRevenue}
          totalProducts={dayReport.totalProducts}
          />
        }
        {
          viewWeek && <ReportCard
          reportTitle={'Weekly Sales'}
          totalRevenue={weekReport.totalRevenue}
          totalProducts={weekReport.totalProducts}
          />
        }
        {
          viewMonth && <ReportCard
          reportTitle={'Monthly Sales'}
          totalRevenue={monthReport.totalRevenue}
          totalProducts={monthReport.totalProducts}
          />
        }
        {
          viewYear && <ReportCard
          reportTitle={'Yearly Sales'}
          totalRevenue={yearReport.totalRevenue}
          totalProducts={yearReport.totalProducts}
          />
        }
      </div>
    </div>
  );
}

export default Reports;
