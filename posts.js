/* codex:review テスト用の一時コメント（後で削除予定） */
/* =========================================================
   ピットイン 活動ブログ 記事リスト（トップ／アーカイブ共通）
   ---------------------------------------------------------
   ★記事を増やすときは、この POSTS 配列の「いちばん上」に
     1件コピペで足すだけ。index.html も blog.html も自動で反映されます。
       date    … 表示する日付（例 '2026.05.10'）
       title   … 記事タイトル
       excerpt … 一覧に出す説明文（1〜2行）
       url     … リンク先。'blog/xxxx.html' でも 'https://...' でもOK
       img     … サムネ画像のパス。無いときは img の行ごと消すか '' にすれば、
                  自動でブランド入りのプレースホルダー画像が入ります。
   ========================================================= */
const POSTS = [
  {
    date: '2026.06.20',
    title: 'ホームページをリニューアルしました',
    excerpt: 'ホームページをさらにリニューアルしました。今までよりもシックだけれどもダイナミックなスタイルになりました。昨日の金曜日の練習はかなり暑かった…',
    url: 'blog/20260620.html',
    img: 'blog/20260620.png'
  },
  {
    date: '2026.04.29',
    title: '昨日の活動と Doubles Matcher Ver.4 リリースのお知らせ',
    excerpt: 'ようやく暖かくなってきて、昨日の練習会は白熱した打ち合いがたくさん見られました。Doubles Matcher Ver.4 もリリースしました。',
    url: 'blog/20260429.html',
    img: 'blog/20260429_thumb.jpg'
  },
  {
    date: '2026.03.19',
    title: 'Doubles Matcher Ver.2 — ダブルス組み合わせアプリを修正しました',
    excerpt: '同じ人が何度も休みになったり人数が消えたりと散々だったアプリを大幅修正。各モードを100回試してようやく安心して使えるようになりました。',
    url: 'blog/20260319.html',
    img: 'blog/app-screenshot1.png'
  },
  {
    date: '2026.03.08',
    title: '2026年 新会員大募集！',
    excerpt: '2026年ピットインでは新会員を大募集いたします。今年から方針を大きく変更して、新しいクラブづくり、新メンバーの育成に力を入れていきたいと思います。',
    url: 'blog/20260308.html',
    img: '260308.jpg'
  },
  {
    date: '2024.02.22',
    title: '2024年もやってます！',
    excerpt: '久しぶりの投稿。2021年に書いていたこのブログを読んで今週参加された方がいらっしゃったので、あまりにもびっくり＆嬉しくてブログを再開しちゃいました。ピットインはずーーーっと続いています。',
    url: 'blog/20240222.html',
    img: 'blog/20240222.jpg'
  },
  {
    date: '2021.01.20',
    title: '1月19日',
    excerpt: '1月5日の初打ち以来、久しぶりのフレッシュテニス。大雪が降っても参加希望者4人いたので集まろうということになったのですが…',
    url: 'blog/20210119.html',
    img: 'blog/20210119.jpg'
  },
  {
    date: '2020.12.26',
    title: '12月25日',
    excerpt: '今日が今年最後の練習日。9人が参加してくれました。金曜日のクリスマスで参加者が少なかったら中止でいいやと思いきや、結構集まってくれました。',
    url: 'blog/20201225.html',
    img: 'blog/20201225.jpg'
  },
  {
    date: '2020.12.19',
    title: '12月18日',
    excerpt: '外は雪ではなく雨だったので大雪の日よりはマシ、それでも参加者は15名。みんな好きだねえ。後半はガット（ガムゾーン／ガムブースト）のテンション談義を熱く。',
    url: 'blog/20201218.html',
    img: 'blog/20201218_1.jpg'
  },
  {
    date: '2019.12.12',
    title: 'ピットインにおいでよ。',
    excerpt: 'サイト管理人gamakenです。光陽小学校の体育館で毎週火・金にフレッシュテニスをやっています。腕試しをしたい方、もっと練習したい猛者は大歓迎。記念すべき初投稿。',
    url: 'blog/20191212.html',
    img: 'blog/20191212.jpg'
  }
];

// 画像が無い記事に入るプレースホルダー（深緑地＋テニスボールのマーク）
const POST_PLACEHOLDER =
  '<div class="thumb-ph">' +
    '<svg viewBox="0 0 100 100" fill="none" stroke="#8fd6a8" stroke-width="6" stroke-linecap="round">' +
      '<circle cx="50" cy="50" r="42"/>' +
      '<path d="M14 32 Q50 50 14 68 M86 32 Q50 50 86 68" stroke-width="5"/>' +
    '</svg>' +
    '<span>PIT·INN</span>' +
  '</div>';

/* 記事一覧を描画する。
     containerId … 描画先要素の id
     limit       … 表示件数。省略 / 0 のときは全件表示             */
function renderPosts(containerId, limit) {
  const list = document.getElementById(containerId);
  if (!list) return;
  const items = (limit && limit > 0) ? POSTS.slice(0, limit) : POSTS;
  list.innerHTML = items.map(function (p) {
    const external = /^https?:\/\//.test(p.url);
    const target = external ? ' target="_blank" rel="noopener"' : '';
    const thumb = p.img
      ? '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy">'
      : POST_PLACEHOLDER;
    return '<a class="post" href="' + p.url + '"' + target + '>' +
             '<div class="date">' + p.date + '</div>' +
             '<div class="body">' +
               '<h3>' + p.title + '</h3>' +
               '<p>' + p.excerpt + '</p>' +
               '<span class="more">Read more</span>' +
             '</div>' +
             '<div class="thumb">' + thumb + '</div>' +
           '</a>';
  }).join('');
}
