User = {
  members: {},
  next_id: 1
};

User.find = function(id){
  return User.members[id];
}

User.create = function(name, password){
  var id = User.next_id ++;
  return User.members[id] = { id: id, name: name, password: password }
}

User.login = function(name, password){
  for(user in User.members){ 
    if(user.name == name){
      if(password == user.password){
        return user;
      }else{
        return false;
      }
    }
  }
};