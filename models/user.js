var User, find_by_name, validate;

User = {
  members: {},
  next_id: 1
};

find_by_name = function (name) {
  var user, id;
  for (id in User.members) {
    user = User.members[id];
    if (user.name === name) {
      return user;
    }
  }
};

validate = function (name, password) {
  if (!name || name === '') {
    return { error: {  name: 'name is required' } };
  }

  if (find_by_name(name)) {
    return { error: {  name: 'name is already in use' } };
  }

  if (!password || password === '') {
    return { error: { password: 'password is required' } };
  }

  return true;
};

exports.find = function (id) {
  return User.members[id];
};


exports.create = function (name, password) {
  var validation, id, user;

  validation = validate(name, password);
  if (validation !== true) { return validation; }

  id = User.next_id++;
  user = { id: id, name: name, password: password };
  User.members[id] = user;

  return user;
};

exports.login = function (name, password) {
  var user = find_by_name(name);

  if (user && password === user.password) {
    return user;
  }

  return { error: 'login failed' };
};

