const getPermissions = roles => {
  let myPerms = [];
  if (roles && localStorage.getItem("@r")) {
    let data = roles.filter(r => r._id === localStorage.getItem("@r"))[0];
    if(data){
      myPerms = data.permissions[0].split("\",\"");
    }
  }

  return myPerms;
};

export default getPermissions;