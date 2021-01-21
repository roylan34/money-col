const errorMsgs: { [key: string]: string } = {
  cardNumber: 'カード番号が無効です。',
  cardExpiry: 'カードの有効期限が無効です。',
  cardCvc: 'セキュリティコードが無効です。',
  nameIsRequired: 'カード名義人を正しく入力してください。',
  cardNumberIsRequired: 'カード番号を正しく入力してください。',
  cardExpiryIsRequired: 'カードの有効期限を正しく入力してください。',
  cardCvcIsRequired: 'セキュリティコードを正しく入力してください。',
};

export default {
  // Login Screen
  todoApp: 'Todo App',
  employeeNumber: '社員番号',
  login: 'ログイン',
  userNotFound: 'メールアドレスまたはパスワードが間違っています。',
  verifyEmail:
    'ご登録されたメールアドレス宛に送付されている確認メール より、メールアドレスを認証してください。',
  errorProcessRequest: 'リクエスト実行中にエラーが発生しました。',
  roleInvalid: 'ログインできません。',

  // Change Password Screen
  pleaseSetNewPassword: '新しいパスワードを設定してください',
  newPasswordConfirm: '新しいパスワード（確認）',
  change: '変更',
  member: 'メンバー',
  substituteRecord: '代理打刻',

  // Home Screen
  home: 'ホーム',
  offDuty: '勤務外',
  onDuty: '勤務中',
  constructionNumber: '三機工業 20-011 マツダ中関B棟',
  constructionSubject: '防塵室新築工事ダクト工事',
  start: '勤務開始',
  modify: '修正',
  finish: '勤務終了',
  cancel: 'キャンセル',
  confirm: '確認',
  confirmAttendance: '以下の内容で出勤を打刻します。よろしいでしょうか？',
  all: '全員',
  san: 'さん',

  // Errors
  required: 'このフィールドは入力必須です。',
  loginError: '社員番号またはパスワードに誤りがあります',
  changePassNotMatchError: 'パスワードが一致しません。',
  changePassCaseError:
    '小文字アルファベット・半角数字を最低１文字ずつ使ってください。',
  somethingWentWrong: 'リクエスト中に予期せぬエラーが発生しました。',
  unauthenticatedError: '未認証',

  // Sidebar
  sidebar: [
    { title: '投資の基礎知識', subTitle: 'マニュアル' },
    { title: '海外銀行口座', subTitle: '徹底マニュアル' },
    { title: '仮想通貨 ', subTitle: '徹底マニュアル' },
  ],

  // Registration
  registration: {
    title: '無料会員登録',
    invitation: {
      urgency: 'さあ、今すぐチャンスをその手に。',
      ease: '簡単登録5分で投資を始めましょう！',
    },
    placeholders: {
      email: 'メールアドレス',
      password: 'パスワード',
      passwordConfirmation: 'パスワード(確認)',
    },
    passwordRequirement: '半角英字、数字含む8文字以上',
    submitButtonTitle: '登録する',
    joinFree: '無料会員登録',
    terms: {
      byRegistering: '登録すると ',
      termsOfService: '利用規約',
      and: ' と ',
      privayPolicy: 'プライバシーポリシー',
      consideredAccepted: ' に同意したことになります。',
    },
    logIn: 'ログイン',
    confirmationEmailNotReceived: '確認メールを受信できませんか？',
    registrationComplete: '登録完了',
    emailVerification: {
      instructions: `ご登録のメールアドレス宛に確認メールが送信されました。
      メールを確認して認証を完了してください。`,
      verified: 'メールアドレス認証完了',
      logInCallToAction:
        '登録したメールアドレスの認証が完了しました。 下記よりログインしてください。',
      errors: {
        emailRequired: 'メールアドレスを入力してください',
        passwordRequired: 'パスワードを入力してください',
        retypedPasswordRequired: '同じパスワードを入力してください',
      },
    },
    joinMailingListLabel: 'おすすめ案件などのメールマガジンを受け取る',
  },

  lastName: '姓',
  firstName: '名',

  // Registration Errors
  emailIsRequired: 'メールアドレスを入力してください。',
  emailIsInvalid: 'メールアドレスを正しく入力してください。',
  lastNameIsRequired: '姓を入力してください。',
  lastNameIsInvalid: '姓を正しく入力してください。',
  firstNameIsRequired: '名を入力してください。',
  firstNameIsInvalid: '名を正しく入力してください。',
  passwordIsRequired: 'パスワードを入力してください。',
  passwordIsInvalid: 'パスワードを正しく入力してください。',
  passwordContainsInvalidChars: '使用できない文字が含まれています。',
  retypedPasswordIsRequired: 'パスワード（確認）を入力してください。',
  passwordsMustMatch: '同じパスワードを入力してください。',
  emailAlreadyInUse: 'このメールアドレスは登録済です。',

  // Forgot Password
  forgotPassword: 'パスワードをお忘れですか？',

  // User Dropdown
  userDropdown: {
    myPageMenu: 'マイページメニュー',
    profile: {
      basicInfo: 'プロフィール',
      purchases: '購入済みアイテム一覧',
      termsOfServices: '利用規約',
      privacyPolicy: 'プライバシーポリシー',
      logOut: 'ログアウト',
    },
    manuals: {
      overseas: '海外口座徹底解説マニュアル',
      fx: 'FXの始め方マニュアル',
      virtual: '仮想通貨徹底解説マニュアル',
      articles: '記事一覧',
    },
  },

  // Top Nav Bar labels
  topNavBarLabels: {
    myPageTopUrl: 'マイページトップへ',
    manuals: 'マニュアル',
  },

  // Right Sidebar labels
  pointsHeldLabel: '保有マネカレポイント',
  purchasePointsLabel: {
    web: {
      firstRow: 'マネカレポイント購入',
      secondRow: 'はこちらから',
    },
    mobile: {
      firstRow: 'マネカレポイント',
      secondRow: '購入はこちらから',
    },
  },
  // Progress Bar
  progressTitle: 'ランクアップまで',

  // Basic Info
  name: '名前',
  profileImage: 'アイコン画像',
  changePassword: 'パスワードを変更する',
  noFilesSelected: '画像ファイルを選択',
  email: 'メールアドレス',
  password: 'パスワード',
  oldPassword: '登録中のパスワード',
  cancelPasswordChange: 'パスワードの変更をキャンセル',
  newPassword: '新しいパスワード',
  confirmNewPassword: '新しいパスワード（確認）',
  registeredEmail: '登録中のメールアドレス',
  save: '保存',
  basicInfoTitle: '基本情報',
  fileIsTooLarge: 'ファイルサイズが大きすぎます。',
  unsupportedFileFormat: 'ファイル形式が対応していません。',

  // Payment Info
  paymentInfoTitle: '支払い情報',
  confirmPurchaseTitle: '購入内容確認',
  comfirmPurchaseMsg: 'ポイントを円で購入しますか？',

  // Footer Labels
  footerLinks: {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  footerFirstColumn: [
    {
      label: '会社概要',
      link: 'http://cityofdreams.xsrv.jp/company/',
    },
    {
      label: 'マネーカレッジとは',
      link: 'http://cityofdreams.xsrv.jp/about/',
    },
    {
      label: '講師紹介',
      link: 'http://cityofdreams.xsrv.jp/teacher/',
    },
    {
      label: '受講生の声',
      link: 'http://cityofdreams.xsrv.jp/voice/',
    },
  ],
  footerSecondColumn: [
    {
      label: 'コース紹介',
      link: 'http://cityofdreams.xsrv.jp/course/',
    },
    {
      label: '知識・教教養コース',
      link: 'http://cityofdreams.xsrv.jp/course/education/',
    },
    {
      label: 'FXトトレードコース',
      link: 'http://cityofdreams.xsrv.jp/course/trade/',
    },
    {
      label: 'EAクリエイトコース',
      link: 'http://cityofdreams.xsrv.jp/course/expert/',
    },
  ],
  footerThirdColumn: [
    {
      label: '投資の基本知識',
      link: 'http://cityofdreams.xsrv.jp/investment/',
    },
    {
      label: '海外銀行口座',
      link: 'http://cityofdreams.xsrv.jp/acount/',
    },
    {
      label: '仮想通貨',
      link: 'http://cityofdreams.xsrv.jp/virtual/',
    },
    {
      label: 'よくあるご質問',
      link: 'http://cityofdreams.xsrv.jp/faq/',
    },
  ],
  footerFourthColumn: [
    {
      label: '新着情報',
      link: 'http://cityofdreams.xsrv.jp/news/',
    },
    {
      label: 'ブログ',
      link: 'http://cityofdreams.xsrv.jp/blog/',
    },
    {
      label: 'お問い合わせ',
      link: 'http://cityofdreams.xsrv.jp/contact/',
    },
  ],
  footerSiteMap: {
    label: 'サイトマップ',
    link: 'http://cityofdreams.xsrv.jp/sitemap/',
  },
  footerPrivacyPolicy: {
    label: 'プライバシーポリシー',
    link: 'http://cityofdreams.xsrv.jp/privacy/',
  },

  // Default placeholder of text input and area
  defaultPlaceHolder: '本文を入力',

  // Ask Modal Title
  askModalTitle: '質問する',
  inputLabels: {
    instructor: '問い合わせ先',
    title: 'タイトル',
    description: '本文',
    attachment: 'ファイル添付',
  },
  inputTitlePlaceholder: 'タイトルを入力',
  submitButtonLabel: 'ポイントを使って質問する',
  confirmPurchasePoints:
    'ポイントが不足しています。 追加のポイント購入を行いますか？',

  // Confirmation Modal
  confirmationTitle: '送信確認',
  confirmButton: '送信する',
  confirmationDeleteTitle: '消去確認',
  confirmDeleteButton: '削除する',
  cancelButton: 'キャンセル',

  // Update Button
  updateButton: '更新する',

  // AskInstructor Validation
  instructorIsRequired: 'インストラクターの選択は必須です。',
  titleIsRequired: 'タイトルの入力は必須です。',
  descriptionIsRequired: '説明文の入力は必須です。',

  // Stripe Card
  stripeLabels: {
    addButton: '追加する',
    confirmationModalMsg: 'このカード情報を本当に削除しますか？',
    delConfirmationMsg: 'このカード情報を本当に削除しますか？',
    placeHolder: {
      cardName: 'クレジットカード名義人',
      cardNumber: 'カード番号',
      cardExpiry: 'MM / YY',
      cardCvc: 'セキュリティコード',
    },
    errorMsgs,
  },
  // Movie Item Titles
  recommendedPastVideos: 'あなたにおすすめの動画',
  recommendedTopics: 'あなたにおすすめの案件',
  recentlyBoughtVideos: '購入済みの動画',
  recentlyBoughtManuals: '購入済みの案件',
  recommendedEA: 'あなたにおすすめのEAプログラム',

  // Reset Password
  resetPassEmailTitle: 'パスワードのリセット',
  resetPassEmailMsg: `登録メールアドレスを入力し、『送信』ボタンを押してください。
    パスワードのリセットのURLを含むメールが送信されます。`,

  resetPassNewPassTitle: 'パスワードの再設定',
  resetPassNewPassMsg: `パスワードの再設定を行います。
  新しいパスワードを入力してください。`,
  resetPassEmailInputLabel:
    'Money Collegeに登録したメールアドレスを入力してください。',
  newPassInputLabel: '半角英字、数字含む8文字以上',
  resetPasswordLinkSent: '送信完了',
  resetPasswordLinkInstructions: `ご登録のメールアドレス宛にパスワード変更のURLが記載されたメールが送信されました。
    メールを確認して認証を完了してください。`,

  // Payment Info Labels
  paymentInfo: {
    registeredCard: '現在の登録済みカード：',
    addCard: 'カード情報を新しく追加',
    deleteCard: 'カード情報を削除',
    cancelCard: 'キャンセル',
  },

  // input password modal
  identification: '本人確認',
  reauthRationale:
    'メールアドレス変更の為本人確認を行います。\nパスワードを入力して下さい。',
  reauthPasswordPlaceholder: 'パスワードを入力',
  confirmation: '確認',

  error: 'エラー',
  updatedSuccessfully: 'プロフィール更新完了',
  updatedProfileMsg:
    'メールアドレスを変更した場合は、受信した確認メールにある認証リンクをクリックしてください。',
  profileHasBeenUpdated: 'プロフィールの更新が正常に行われました。',
  // contents page
  pastVideos: 'おすすめ動画',
  pastProjectVideo: 'おすすめ案件',
  manualList: 'マニュアル一覧',
  eaProgram: 'EAプログラム',
  buy: '購入する',
  browse: '閲覧する',
  purchaseVideoPrompt: 'ポイントを使用してこの動画を購入しますか？',
  yourPoints: 'あなたの保有ポイント：',
  points: 'ポイント',
  purchaseConfirmation: '購入確認',
  notEnoughPoints: 'ポイント不足',
  replenishPointsPrompt:
    ' ポイントが不足しています。\n追加のポイント購入を行いますか？',
  your: 'あなたに',
  goToPurchase: '購入ページへ',

  updateCompleted: '変更完了',
  yourLoginEmail: 'ログインメールアドレスが',
  hasRevertedTo: 'に戻されま した。',
  emailRecoveryInfo:
    'ログインメールアドレスの変更をリクエストしていない場合は、誰かがあなたのアカウントにアクセスしようとしている可能性があります。今すぐ',
  resetPassword: 'パスワードを変更',
  pleaseDoIt: 'して下さい。',
  contactBannerLabel:
    '当学習塾では、お金に関する教養のほか、資産運用や副業として、FXのトレード方法などの情報も提供しております。どんな事でもお尋ねください。',
  view: '視聴する',
  unavailable: '対象外',

  // bought contents page
  purchasedItems: '購入済みアイテム',
  boughtPastVideos: '過去動画',
  case: '案件',
  boughtContentsHeaders: {
    videos: '過去動画',
    projectContents: '案件',
  },
  boughtContentsTitle: {
    videos: '過去動画',
    projectContents: '購入済みアイテム',
  },
  pointsWereRefunded: 'ptがキャッシュバックされました',

  seeMore: 'もっと見る',
  noPurchasedContent: '購入済コンテンツはありません',

  // Mailbox
  mailboxHeader: 'メールボックス',
  mailboxInputPlaceholder: 'ここに返信を入力',
  mailboxInputSendButton: 'マネカレポイントを使って返信する',
  mailFileSizeError: 'ファイル容量は20MBまでです',
  mailboxSettingsTitle: '設定',
  mailboxSettingsDone: '完了',
  mailboxNotifLabel: '通知',
  mailboxNotifCheckboxLabel: '返信が来たら登録メールアドレス宛に通知する',
  mailboxNotifUsageLabel: 'ポイント使用 の通知',
  mailboxNotifUsageCheckboxLabel:
    'メッセージ送信の際にポイント使用確認画面を表示する',
  msgSeen: '既読',
  adminHeader: 'メールボックス - 岡田准一',

  // Admin Mailbox
  pointMgmtModalHeader: 'ポイント管理',
  pointMgmtModalInputLabel: 'ポイント',
  pointMgmtModalInputPlaceholder: 'ポイント数を入力',
  pointMgmtModalCheckboxLabel: 'マイナスにする',
  confirmButtonLabel: '確定',
  userDetailsBackLabel: 'ユーザー詳細ページ',
  userDetailsPtUsageHist: 'ポイント使用履歴',

  // Admin Users list
  addGiveAwaysSuccessTitle: 'ポイント付与完了',
  addGiveAwaysSuccessMsg: '全ユーザーへのポイント付与が完了しました。',

  // Purchase Points
  selectPointsHeader: 'ポイントを選ぶ',
  purchasePointsWarning:
    'デジタルコンテンツのため、商品の性質上返品はお受けしておりません。ポイントの有効期限は最後にポイントをご購入、または最後にポイントをご利用いただいた日より半年間です。',
  aboutPaymentMethod: 'お支払い方法について',
  return: 'もどる',
  paymentConfirmationTitle: '支払い完了',
  paymentFailureToAddPoints: 'ポイント付与失敗',
  paymentCompleted: '支払いが完了しました。',
  continueToMyPageTop: '引き続きMoney Collegeをお楽しみください。',
  toMyPageTopPrompt: 'マイページトップへ',
  toContentListPrompt: 'コンテンツ一覧ページへ',
  paymentFailAddPointsError:
    'ポイント付与の手続き中にエラーが発生いたしました。\nお客様のお支払いは完了しており、運営よりポイント付与の手続きをさせていただきます。\nポイント付与まで少々お待ちください。\nご不便をおかけし、大変申し訳ございません。',
  paymentFailAddPointsPrompt:
    '万が一ポイントが付与されない場合は、お手数ですがマイページトップの「お問い合わせ」より運営へご報告いただきますよう、何卒よろしくお願いいたします。',

  // Users Template
  usersHeader: 'ユーザー情報ページ',
  usersSearchBarPlaceholder: '検索したいワードを入力',

  purchaseHistory: {
    videoLectures: '動画購入',
    projectContents: '案件購入',
    EAPrograms: 'EAプログラム購入',
    manuals: 'マニュアル一覧購入',
    replyToInstructor: 'メッセージ返信',
    askInstructor: '講師に質問',
    default: '購入',
  },
  // Purchase Points
  paymentOverview: '概要',
  paymentTotal: '合計：',
  pointsToBePurchased: 'ポイント：',
  paymentTermsAndConditions:
    '支払いを完了することにより、サービス規約に同意したものとみなされます。',
  selectPaymentOption: '支払方法を選択',
  paypal: 'PayPal',
  addNewCard: '新しくカードを追加する',
  paypalPrompt:
    '取引を完了するために、PayPalのセキュリティで保護されたサーバーに移動します。',
  checkoutFailure: 'エラーが発生しました。再試行してください。',
  welcomeToast: '初回ログインボーナスとして10ptが付与されました。',
  bonusPoint: 'ボーナス付与',

  //Error boundary, unexpected errors
  errorBoundaryTitle: '操作中に予期せぬエラーが発生しました',
  errorBoundaryMessage: 'Well, sorry this is unexpected....',
  errorBoundaryButton: 'ホームに戻る',

  // PaymentErrors
  cardDeclined: '支払いができませんでした。決済業者へご確認ください。',
  stripeServerError:
    'サーバエラーが発生いたしました。時間を置いて再度手続きしてください。',
  stripeConnectionError:
    '接続中にエラーが発生しました。時間を置いて再度手続きしてください。',
};
