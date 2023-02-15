const DNAtoRNA =(dna)=> dna.split('').map((e,i)=>  e == 'T' ? e = 'U' : e).join('');
DNAtoRNA('UUTT');