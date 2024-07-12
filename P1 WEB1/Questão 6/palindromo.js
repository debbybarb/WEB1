function palindromo(p1, p2) {
    p1 = p1.toLowerCase().replace(/\s/g, '');
    p2 = p2.toLowerCase().replace(/\s/g, '');

    const p2Invertida = p2.split('').reverse().join('');
  
    return p1 === p2Invertida;
}