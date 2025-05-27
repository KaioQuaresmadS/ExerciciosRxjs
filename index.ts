import { log } from 'console';
import { interval, map, Observable, range, take, toArray } from 'rxjs';
import { clearInterval } from 'timers';


// // Obsevable 1
// const obs1 = new Observable( sub => {

//     sub.next("Kaio");
//     sub.next("Jesus");
//     sub.next("Espírito Santo");
    
//     sub.complete();
// });

// obs1.subscribe(console.log);


// // Observable 2
// const obs2 = new Observable(sub => {

//     [1,2,3,4,5].forEach(num => sub.next(num));
//     sub.complete();
// });

// obs2.subscribe(n => console.log("Número: ",n));

// // Observable 3

// const obs3 = new Observable( sub => {
//     setTimeout(() => sub.next('Primeiro'), 1000);
//     setTimeout(() => sub.next('Segundo'), 2000);
//     setTimeout(() => sub.complete(), 3000);
// });

// obs3.subscribe({
//     next: console.log,
//     complete: () => console.log("Acabou")
// });

// // Observable 4

// const obs4 = new Observable(sub => {
//     sub.next('Dado');
//     sub.error("Deu ruim!");
// });
// obs4.subscribe({
//     next: console.log,
//     error: e => console.log('Erro: ', e),
//     complete: () => console.log('Finalizado')
// });

// // Observable 5

// const obs5 = new Observable(sub => {
//     let count = 0;
//     const interval = setInterval(() => {
//         sub.next(count++);
//         if(count > 4){
//             clearInterval(interval);
//             sub.complete();
//         }
//     }, 1000);
// });

// obs5.subscribe(console.log);

// //Observable 6

// const obs6 = new Observable(sub => {
//     sub.next({nome: 'Kaio', idade: 20})
//     sub.next({nome: 'Mick', idade: 32})
//     sub.complete()
// });
// obs6.subscribe(console.log);

// // Observable 7

// const obs7 = new Observable(sub => {
//     [3,2,1].forEach(num => sub.next(num));
//     sub.complete();
// });
// obs7.subscribe(console.log);

// // Observable 8

// const obs8 = new Observable(sub => {
//     sub.next(true);
//     sub.next(false);
//     sub.next(true);
//     sub.complete()
// });
// obs8.subscribe(b => console.log("Valor booleano: ",b));

// // Observable 1 -Novo Exercicio

// const obsEx1 = interval(2000).pipe(
//     take(5)
// );

// obsEx1.subscribe({
//     next: () => console.log("Correndo"),
//     complete: () => console.log('Cheguei ao destino!')
// });

// // Observable 2 
const obsEx2 = range(1,100).pipe(

    toArray(),// toArray funciona para juntar tudo em um array só
    map((list) => {
        const randomIndex = Math.floor(Math.random() * list.length);// Floor arredonda para baixo o valor - Random só escolhe valores entre 0 e 1 ou seja 0.80 e multiplicamos para fazer ele virar um número flutuante e depois fazemos com o floor ele ser arredondado dando os valores que queremos
        return list[randomIndex];
    })
)

obsEx2.subscribe(num => console.log(`Número aleatório: ${num}`))





