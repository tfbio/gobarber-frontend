import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import { useAuth } from '../../hooks/authContext';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  availability: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const { logout, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/monthly_availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const unavailableDays = useMemo(() => {
    const days = monthAvailability
      .filter((date) => date.availability === false)
      .map((date) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, date.day);
      });
    return days;
  }, [monthAvailability, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt="Profile" />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={logout}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Schedule</h1>
          <p>
            <span>Today</span>
            <span>Day 5</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next Appointment:</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/61916772?s=460&u=e0be4ed8cb4979ef573730ff81d28666887aa924&v=4"
                alt="Appointment"
              />
              <strong>John Doe</strong>
              <span>
                <FiClock />
                09:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Morning</strong>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61916772?s=460&u=e0be4ed8cb4979ef573730ff81d28666887aa924&v=4"
                  alt="Appointment"
                />
                <strong>John Rivers</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Afternoon</strong>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/61916772?s=460&u=e0be4ed8cb4979ef573730ff81d28666887aa924&v=4"
                  alt="Appointment"
                />
                <strong>John Rivers</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...unavailableDays]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
