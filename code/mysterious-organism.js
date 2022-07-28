// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num,
        dna: arr,
        mutate() {
            let randomIndex = Math.floor(Math.random() * (this.dna.length));
            let randomBase = ['A', 'T', 'C', 'G'].filter(base => base !== this.dna[randomIndex])[Math.floor(Math.random() * 3)]
            this.dna[randomIndex] = randomBase;
            return this.dna;
        },
        compareDNA(pObj){
            const matchList = [...this.dna].filter((base,index) => { 
                return base === pObj.dna[index];
            });
            const matchPercentage = Math.round((matchList.length * 100) / this.dna.length);
            console.log(`specimen #${this.specimenNum} and specimen #${pObj.specimenNum} have ${matchPercentage}% DNA in common`) 
        },
        willLikelySurvive(){
            const cgList = [...this.dna].filter(base => base === 'C' || base === 'G');
            return Math.round((cgList.length * 100) / this.dna.length) >= 60;
        },
        complementStrand(){
            const baseCouple = {'A':'T','T':'A','C':'G','G':'C'};
            return [...this.dna].map(base => {
                return baseCouple[base];
            });
        }
    };
}


let obj1 = pAequorFactory(1, mockUpStrand())
let obj2 = pAequorFactory(2, mockUpStrand())

// obj1.mutate();
// console.log([...obj1.dna] === obj1.mutate())

// console.log(obj1,obj2)
// obj2.compareDNA(obj1);
//console.log(obj1.willLikelySurvive())
//console.log(obj1,obj1.complementStrand())

const pList = [];
let count = 0;
do
{
    let p = pAequorFactory(count + 1, mockUpStrand())
    if(p.willLikelySurvive()){
        count++;
        pList.push(p);
    }
}
while(count !== 30)

console.log(pList)
