showComments = (comment) => {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML +=
   ` <div class="row shadow p-3 mb-3 bg-white rounded">
           <div class="col-7">
           <p>
        ${comment.val().comment}
        </p>
                </div>
        <div class="col-5 text-right">
        <button type="button" class="btn btn-warning" onclick="deleteComment('${comment.key}')">Eliminar</button>
        </div>
    </div>
    `;
};
