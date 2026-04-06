const genderTranslations = {
  male: 'masculino',
  female: 'feminino',
  hermaphrodite: 'hermafrodita',
  none: 'nenhum',
  'n/a': 'nao se aplica',
  unknown: 'desconhecido',
};

const hairColorTranslations = {
  blond: 'loiro',
  brown: 'castanho',
  black: 'preto',
  auburn: 'ruivo',
  white: 'branco',
  grey: 'cinza',
  gray: 'cinza',
  none: 'sem cabelo',
  unknown: 'desconhecido',
  'n/a': 'sem cabelo',
};

const skinColorTranslations = {
  fair: 'clara',
  gold: 'dourada',
  white: 'branca',
  blue: 'azul',
  light: 'clara',
  red: 'vermelha',
  green: 'verde',
  'green-tan': 'verde amarronzada',
  pale: 'palida',
  metal: 'metalica',
  dark: 'escura',
  brown: 'marrom',
  tan: 'bronzeada',
  grey: 'cinza',
  gray: 'cinza',
  orange: 'laranja',
  yellow: 'amarela',
  'mottled green': 'verde manchada',
  unknown: 'desconhecida',
};

const eyeColorTranslations = {
  blue: 'azul',
  yellow: 'amarelo',
  red: 'vermelho',
  brown: 'castanho',
  'blue-gray': 'azul acinzentado',
  black: 'preto',
  orange: 'laranja',
  hazel: 'avela',
  pink: 'rosa',
  unknown: 'desconhecido',
  white: 'branco',
  dark: 'escuro',
  golden: 'dourado',
};

function translateDelimitedValue(value, translations) {
  if (!value) {
    return 'desconhecido';
  }

  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === 'unknown') {
    return 'desconhecido';
  }

  return value
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .map((item) => translations[item] || item)
    .join(', ');
}

function translateGender(value) {
  return translateDelimitedValue(value, genderTranslations);
}

function translateHairColor(value) {
  return translateDelimitedValue(value, hairColorTranslations);
}

function translateSkinColor(value) {
  return translateDelimitedValue(value, skinColorTranslations);
}

function translateEyeColor(value) {
  return translateDelimitedValue(value, eyeColorTranslations);
}

export {
  translateEyeColor,
  translateGender,
  translateHairColor,
  translateSkinColor,
};
