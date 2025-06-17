const num = 15;

// もし定数numが3と5の倍数の場合、「３と５の倍数です」という文字列を出力する
if (num % 3 == 0 && num % 5 == 0) {
    console.log('３と５の倍数です');
}

// もし定数numが3の倍数の場合、「３の倍数です」という文字列を出力する
else if (num % 3 == 0) {
    console.log('３の倍数です');
}
// もし定数numが5の倍数の場合、「５の倍数です」という文字列を出力する
else if (num % 5 == 0) {
    console.log('５の倍数です');
}
//それ以外のときは、変数numの値を出力する
else{
    console.log(num);
}
