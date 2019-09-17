import React from "react";
import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

var data = [
  {
    firstName: 'Onyekach',
    lastName: 'Goodnews',
    email: 'Onyegood@yahoo.com',
    phone: '07031002066',
    role: 'Superadmin',
  },
  {
    firstName: 'Onuoha',
    lastName: 'Nnamdi',
    email: 'john@yahoo.com',
    phone: '07031002066',
    role: 'Admin',
  },
  {
    firstName: 'Obinna',
    lastName: 'Chima',
    email: 'okechukwu@yahoo.com',
    phone: '07031002066',
    role: 'Officer',
  },
]

const newPerson = () => {
  //const statusChance = Math.random();
  return {
    // firstName: 'Onyekach',
    // lastName: 'Goodnews',
    // email: 'Onyegood@yahoo.com',
    // phone: '07031002066',
    // role: 'Superadmin',

    //age: Math.floor(Math.random() * 30),
  //   visits: Math.floor(Math.random() * 100),
  //   progress: Math.floor(Math.random() * 100),
  //   status:
  //     statusChance > 0.66
  //       ? "relationship"
  //       : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return data.map(d => {
    return {
      ...newPerson(),
      children: data.map(newPerson)
    };
  });
}