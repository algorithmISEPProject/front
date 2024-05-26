`
query MyQuery {
    groups {
      id
      name
      membersAggregate {
        count
      }
    }
    events {
      date
      name
      id
      attendeesAggregate {
        count
      }
    }
  }
`;
