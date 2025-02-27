// slick部分の設定
$(function () {
  // 【スライダー】
  $(".first-view").slick({
    // この中にパラメータを記載
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    speed: 1000,
    infinite: true, // 無限スライド
    arrows: false, // 矢印
  });

  // スクロール画面の上部がFVの高さより大きくなったらクラス名「scroll-bg」を付与（付与されたらCSSが適用されて表示が変化する）
  $(window).on("scroll", function () {
    mvHeight = $(".fv-eyecatch").height();
    if ($(window).scrollTop() > mvHeight) {
      $(".header").addClass("scroll-bg");
    } else {
      $(".header").removeClass("scroll-bg");
    }
  });

  $(document).ready(function () {
    // ハンバーガーブロックボタンをクリック時に
    $("#hamburger-block").click(function (event) {
      event.stopPropagation(); // クリックイベントの伝播を防ぐ
      // ハンバーガーボタンがアクティブ状態のときにクリックするとナビゲーションが閉じる
      if ($(".hamburger").hasClass("active")) {
        closeMenu(); // すでに開いていたら閉じる
      } else {
        openMenu(); // 閉じていたら開く
      }
    });

    // メニューのリンクをクリックしたら閉じる処理
    /* .header__navのaタグをクリックしたらメニューを閉じる（aタグのリンククリック後にメニューを閉じる動作） */
    $(".header__nav a").click(function () {
      closeMenu();
    });

    // ナビゲーションメニューを開く（ハンバーガーボタンとヘッダー部分にactiveがついたら発動）
    function openMenu() {
      $(".hamburger").addClass("active");
      $(".header__nav").addClass("active");
    }

    // ナビゲーションメニューを閉じる
    function closeMenu() {
      if ($(window).width() <= 767) {
        $(".hamburger").removeClass("active");
        $(".header__nav").removeClass("active");
      }
    }

    if ($(window).width() <= 767) {
      $(document).click(function (event) {
        if (
          !$(event.target).closest("#hamburger-block").length && //ハンバーガーアイコン以外
          !$(event.target).closest(".header__nav").length //ナビゲーション以外
          // ハンバーガーアイコンとナビゲーションアイコンをクリックしても閉じるようにする。
        ) {
          closeMenu();
        }
      });
    }
  });

  // 【TOPへ戻るボタン】作成部分
  var scrolltop = $(".scroll-top-btn");
  // ヘッダーの高さを取得する
  var headerHeight = $("header").outerHeight();

  // スクロール位置がヘッダーの高さを超えたら（要素の高さを取得する）ボタンを表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      scrolltop.fadeIn();
    } else {
      scrolltop.fadeOut();
    }
  });

  $(".works-item").click(function () {
    console.log($(this).data("target"));
    $($(this).data("target")).addClass("is-active");
  });
  $(".modal-close, .modal-bg").click(function () {
    console.log($(this));
    $(this).closest(".modal-area").removeClass("is-active");
    return false;
  });
});

// モーダル表示の時、背景を動かさない。
$(function () {
  $(".works-item").click(function () {
    $("body").addClass("no-scroll");
  });
  $(".modal-close, .modal-bg").click(function () {
    $("body").removeClass("no-scroll");
  });
});

// 内容に同意して送信を押したときの動作
function redirectPage() {
  setTimeout(function () {
    window.location.href = "index.html";
  });
}

// すべて読み込み終わってからAOSを実行
window.onload = function () {
  AOS.init({
    offset: 300,
    duration: 500,
    easing: "ease-out",
    once: true,
  });
};

// 0222　ヘッダー部分がMVを過ぎたあたりで1秒掛けてふわっと表示されるようにしたい。
// javascriptにて設定するかAOSで設定するか考えながら行う。

// 【スクロール時にヘッダーの背景色をふわっと表示されるように変更】

// 0222変更前
// $(window).on("scroll", function () {
//   mvHeight = $(".fv-eyecatch").height();
//   if ($(window).scrollTop() > mvHeight) {
//     $(".header").addClass("scroll-bg");
//   } else {
//     $(".header").removeClass("scroll-bg");
//   }
// });
