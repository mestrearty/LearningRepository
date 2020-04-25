//promisse

function esperar3sPromisse() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois da promessa");
    }, 3000);
  });
}

esperar3sPromisse().then((dado) => console.log(dado));

fetch("https://swapi.co/api/people/1")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch(err => console.log(err));
