const ITEMINFOS = [
  {
    id: 1,
    author: {
      id: 1,
      email: 'string',
      tag: '#지갑 #잡화',
      nickname: '지갑전문',
      profileImageUrl: '',
      address: 'string',
    },
    mainImageUrl: 'http://naver.com',
    title: '남성용 반지갑',
    content: '호불호 없는 남성용 반지갑입니다!',
    contentImageUrl: 'http://naver.com',
    quantity: 5,
    price: 36500,
    createdDate: '2022-01-10T15:01:30',
    modifiedDate: '2021-01-10T15:01:30',
    likeCount: 0,
    viewCount: 1,
    isLiked: false,
    isDiscount: true,
    discountRate: 30, // isDiscount가 false면 null
    discountPrice: 10950, // isDiscount가 false면 null
    priceToBuy: 25550, // isDiscount가 false면 null
  },
];

export default ITEMINFOS;
