function displayCurrentDate() {
  const now = new Date(); // 現在のDateオブジェクトを作成

  const year = now.getFullYear(); // 年を取得 (例: 2025)
  // getMonth()は0から始まるため、1を加えて実際の月にする
  const month = now.getMonth() + 1; // 月を取得 (例: 6, getMonth()は0-11)
  const day = now.getDate(); // 日を取得 (例: 29)

  console.log(`${year}年${month}月${day}日`);
  // または、HTML要素に表示する場合
  // document.getElementById('dateDisplay').textContent = `${year}年${month}月${day}日`;
}

// 関数を実行して年月日を表示
displayCurrentDate();