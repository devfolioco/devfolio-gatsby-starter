import React from 'react';
import styled from 'styled-components';

import { Section, Container, Button } from '@components/global';

const SCHEDULE = [
  {
    name: 'Day 1',
    value: [
      {
        time: '8:00 AM',
        label: 'Check-In',
      },
      {
        time: '9:00 AM',
        label: 'Opening Ceremony',
      },
      {
        time: '1:00 PM',
        label: 'Lunch',
      },
      {
        time: '4:00 PM',
        label: 'Hacking Begins',
      },
      {
        time: '8:00 PM',
        label: 'Dinner',
      },
    ],
  },
  {
    name: 'Day 2',
    value: [
      {
        time: '8:30 AM',
        label: 'Breakfast',
      },
      {
        time: '12:30 PM',
        label: 'Lunch',
      },
      {
        time: '4:00 PM',
        label: 'Hacking Ends',
      },
      {
        time: '4:30 PM',
        label: 'Tea',
      },
    ],
  },
  {
    name: 'Day 3',
    value: [
      {
        time: '8:00 AM',
        label: 'New Check-In',
      },
      {
        time: '9:00 AM',
        label: 'Fresh Opening Ceremony',
      },
      {
        time: '1:00 PM',
        label: 'Nice Lunch',
      },
      {
        time: '4:00 PM',
        label: 'Hacking Begins Again',
      },
      {
        time: '8:00 PM',
        label: 'Dinner',
      },
    ],
  },
];

class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeDay: 1,
    };
  }

  handleClick = active => this.setState({ activeDay: active });

  render() {
    const { activeDay } = this.state;
    return (
      <Section id="schedule" accent>
        <Container>
          <h1 style={{ marginBottom: '4rem', textAlign: 'center' }}>
            Schedule
          </h1>
          <Tabs num={SCHEDULE.length}>
            {SCHEDULE.map(({ name }, i) => (
              <Tab
                onClick={() => this.handleClick(i + 1)}
                active={activeDay === i + 1}
                disabled={activeDay === i + 1}
                key={i}
              >
                {name}
              </Tab>
            ))}
          </Tabs>
          <List>
            {SCHEDULE[activeDay - 1].value.map(({ time, label }) => (
              <Item key={time}>
                <Time>{time}</Time>
                <div>{label}</div>
              </Item>
            ))}
          </List>
        </Container>
      </Section>
    );
  }
}

const Tabs = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.num}, 200px)`};
  grid-gap: 32px;
  justify-content: center;
`;

const Tab = styled(Button)`
  background-color: ${props =>
    props.theme.color.blue[props.active ? 'dark' : 'regular']};

  &:disabled {
    cursor: default;
    background-color: ${props => props.theme.color.blue.dark};
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem auto;
  max-width: 800px;
`;

const Item = styled.li`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.black.light};
  padding: 1.5rem 0.5rem;
`;

const Time = styled.div`
  width: 96px;
  margin-right: 2rem;
  font-family: ${props => props.theme.font.secondary};
`;

export default Schedule;
