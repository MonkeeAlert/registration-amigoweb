export function generateId() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const scheme = [ ...new Array(10) ].map( (_, k) => Math.ceil(Math.random() * k) > 1 ? 0 : 1 ).sort( _ => 0.5 - Math.random());
  
  const id = scheme.map( (i, k) => {
    var char = '';
    
    if(i === 1) 
      char = letters[Math.ceil(Math.random() * letters.length - 1)];
    else
      char = numbers[Math.ceil(Math.random() * numbers.length - 1)];

    return char
  }).join('');

  return id;
}
