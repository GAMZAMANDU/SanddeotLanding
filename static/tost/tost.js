const posDictionary = {
  'det': {
    name: '관형사',
    meaning: '이름이나 대명사 앞에 놓여서 그 이름이나 대명사가 어떤 성질이나 상태를 가지고 있는지 설명해 주는 말이야.'
  },
  'adj': {
    name: '형용사',
    meaning: '이름이나 대명사가 어떤 성질이나 상태를 가지고 있는지 설명해 주는 말이야.'
  },
  'adv': {
    name: '부사',
    meaning: '동사나 형용사, 다른 부사 따위의 앞이나 뒤에 놓여서, 그 의미를 더 잘 설명하거나 더 자세히 설명해 주는 말이지.'
  },
  'nou': {
    name: '명사',
    meaning: '사물의 이름을 가리키는 말이야.'
  },
  'ver': {
    name: '동사',
    meaning: '사물이나 사람이 하는 일이나 그것의 상태를 말해 주는 말이야.'
  },
  'pro': {
    name: '대명사',
    meaning: '사물이나 사람을 가리키거나 대신하여 쓰이는 말이야.'
  },
  'pre': {
    name: '전치사',
    meaning: '명사나 대명사 앞에 놓여서 그 명사나 대명사의 관계나 위치를 나타내 주는 말이야.'
  },
  'con': {
    name: '접속사',
    meaning: '두 개 이상의 문장이나 말을 서로 연결해 주는 말이야.'
  },
  'int': {
    name: '감탄사',
    meaning: '말의 뜻을 분명히 하거나 감정을 나타내는 말이야.'
  },
  'par': {
    name: '파티클',
    meaning: '단어나 문장에 특정한 의미나 강조를 주는 말이야.'
  },
  'num': {
    name: '수사',
    meaning: '수량이나 순서를 나타내는 말이야.'
  },
  'mod': {
    name: '조동사',
    meaning: '사람이나 사물의 동작이나 상태의 가능성이나 필요성, 의지를 나타내는 말이야.'
  }
};



let tostMessage = document.getElementById('tost_message');

function tostOn(cls,purpose) {
    const btnClass = cls.className;

    if (purpose = 'foomsa'){
      const name = posDictionary[btnClass]['name'];
      const meaning = posDictionary[btnClass]['meaning'];
  
      tostMessage.innerHTML = `<b>${name}</b>: ${meaning}`;
      tostMessage.classList.add('active');
    }
  
      setTimeout(function() {
        tostMessage.classList.remove('active');
      }, 3000);
    
  }
  