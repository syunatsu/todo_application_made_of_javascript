const onClickAdd = () => { 
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  createIncompleteList(inputText);
}

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});

 // 未完了のTODOから指定の要素を削除する関数
 const removeElements = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
};

// 未完了のTODOへ指定の要素を追加する関数
const createIncompleteList = (text) => {
  // liを生成する
  const li = document.createElement('li');
  li.className = 'list-row';

  // pタグを作成する
  const p = document.createElement('p');
  
  // テキストをセットしていく
  p.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    // 押された完了ボタンのliを未完了のTODOから削除する
    removeElements(completeButton.parentNode);

    // 削除したTODOのテキストを取得する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // 削除したTODOの中身を初期化する
    addTarget.innerHTML = null;

    // pを生成してテキストを入れる
    const p = document.createElement('p');
    p.innerText = text;

    // 戻すボタンを生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      // 押された戻るボタンの親タグを完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      // テキストを取得する
      const text = backButton.parentNode.firstElementChild.innerText;

      // 未完了のTODOへ表示する
      createIncompleteList(text);
    });

    // pと戻すボタンをaddTargetの子要素に追加する
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //addTargetを完了したTODOへ表示する
    document.getElementById('complete-list').appendChild(addTarget);
  });

  // button(削除)作成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンのliを削除する
    removeElements(deleteButton.parentNode);
  });

  // liの子要素にpを追加する
  // liの子要素に完了ボタンと削除ボタンを追加する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // ulの子要素にliを追加する(未完了のTODO)
  document.getElementById('incomplete-list').appendChild(li);
};
