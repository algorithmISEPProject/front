`
mutation MyMutation($userToFollowId: ID = "", $_userId: ID = "") {
    updateUsers(
      update: {followers: {connect: {where: {node: {_id: $_userId}}}}}
      where: {_id: $userToFollowId}
    ) {
      users {
        followersAggregate {
          count
        }
        email
      }
    }
  }
  
  
  
  `;
