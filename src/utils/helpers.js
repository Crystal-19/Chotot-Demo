export const formatPrice = (price) => {
  return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'VND'}).format(price)
}

export const DEFAULT_AVATAR = 'https://www.chotot.com/user/static/img/avatar.svg'
