addData = (comment) => {
  const newKey = firebase.database().ref().child('comments').push().key;
  firebase.database().ref(`comments/${newKey}`).set({
    comment,
  });
};

const getData = path => firebase.database().ref(path);
const deleteData = path => firebase.database().ref(path).remove();
