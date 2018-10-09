window.onload = () => {
  showData();
};
showData = () => {
  getData('comments')
    .on('child_added', (comment) => {
      showComments(comment);
    });
};

const deleteSkill = (user, key) => {
  deleteData(`students/${user}/skills/${key}`);
};
const addComment = () => {
  const comment = document.getElementById('comment');
  const comments = document.getElementById('comments');
  addData(comment.value);
  comment.value = '';
  comments.innerHTML = '';
  showData();
};
const deleteComment = (key) => {
  deleteData(`comments/${key}`);
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML = '';
  showData();
};
