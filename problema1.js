// function esMultiploDeTres(numero) {
    // return numero % 3 === 0;
//   }

  function esMultiploDeTres(numero) {
    let suma = 0;
    let digitos = numero.toString().split("");
    
    for (let i = 0; i < digitos.length; i++) {
      suma += parseInt(digitos[i]);
    }
    
    while (suma > 9) {
      let nuevaSuma = 0;
      let digitosSuma = suma.toString().split("");
      
      for (let i = 0; i < digitosSuma.length; i++) {
        nuevaSuma += parseInt(digitosSuma[i]);
      }
      
      suma = nuevaSuma;
    }
    // return suma === 3 || suma === 6 || suma === 9
  
    if ((suma === 3 || suma === 6 || suma === 9)){
      return "El numero " + numero + " es multipo de 3"
    }else{
      return "El numero " + numero + " no es multipo de 3"
    }
    
  }
  console.log(esMultiploDeTres(333));

  function es_multiplo_de_tres(numero) {
    if (numero === 0) {
      return true;
    } else if (numero === 1 || numero === 2) {
      return false;
    } else {
      return es_multiplo_de_tres(numero - 3);
    }
  }
  
  function esMultiploDeTres(numero) {
    for (let i = 3; i <= numero; i += 3) {
        if (i === numero) {
            return true;
        }
    }
    return false;
  }
  
   
 
 
    
  function listUsersWithMovie(users, movies) {
    const usersWithMovie = [];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const movieList = user.movies;
      for (let j = 0; j < movieList.length; j++) {
        const movie = movieList[j];
        if (movies.includes(movie)) {
          usersWithMovie.push({
            name: user.name,
            email: user.email,
            movies: movie,
          });
          break;
        }
      }
    }
    return usersWithMovie;
  }
  
  const users = [
    {
      name: "Julieta Mendez",
      email: "julietamendez23@gmail.com",
      movies: ["Titanic", "Matrix", "La bella y la bestia"],
    },
    {
      name: "Matheo Perez",
      email: "Matheo77@gmail.com",
      movies: ["Matrix", "Toy Story", "Sonic"],
    },
    {
      name: "Lucia Gomez",
      email: "Luciagomez75@gmail.com",
      movies: ["Ted", "Matrix", "Star Wars"],
    },
  ];
  
  const movies = ["Matrix", "Tictanic", "Sonic"];

  
  console.log(listUsersWithMovie(users, movies));
  function listUsersWithMovies2(users, movies) {
    const usersWithMovies = [];
  
    for (let user of users) {
      const userMovies = user.movies.filter(movie => movies.includes(movie.title));
      if (userMovies.length > 0) {
        const movieTitles = userMovies.map(movie => movie.title);
        const rateSum = userMovies.reduce((sum, movie) => sum + movie.rate, 0);
        const rateAvg = rateSum / userMovies.length;
        const newUser = {
          name: user.name,
          email: user.email,
          address: user.address,
          company: user.company.name,
          movies: movieTitles,
          rate: rateAvg.toFixed(1)
        };
        usersWithMovies.push(newUser);
      }
    }
  
    return usersWithMovies;
  }
  
  const users2 = [
    {
      name: "Juan Pérez",
      email: "juanperez23@gmail.com",
      address: "Av.siempre viva 3456,2 piso, Moreno",
      company: {
        name:"Mario Bros.",
         },
      movies: [
        { title: "Titanic", rate: 7.5 },
        { title: "Blade", rate: 8.0 },
        { title: "El señor de los anillos", rate: 9.0 }
      ]
    },
    {
      name: "María Gómez",
      email: "mariagomez45@hotmail.com",
      address: "Av.independencia 2344, 5 piso, San Cristobal",
      company: { 
        name: "Nintendo",
         },
      movies: [
        { title: "Jurassic Park", rate: 8.0 },
        { title: "Matrix", rate: 8.5 }
      ]
    },
    {
      name: "Pedro González",
      email: "pedrogonzalez12@gmail.com",
      address: "Av.san juan 2500, 3 piso, Constitucion ",
      company: {
        name:  "PlayStation",
      },
      movies: [
        { title: "Star Wars", rate: 8.0 },
        { title: "Harry Potter", rate: 7.0 }
      ]
    },
    {
      name: "Laura López",
      email: "lauralopez98@yahoo.com",
      address: "Alberti 1499, piso pb, Congreso",
      company: { 
        name:"Microsoft",
    },
      movies: [
        { title: "Spiderman", rate: 7.0 },
        { title: "Toy Story", rate: 8.5 },
        { title: "The Shawshank Redemption", rate: 9.0 }
      ]
    }
  ];
  
  const movies2 = ["Titanic", "Blade", "Jurassic Park", "Matrix", "Star Wars", "Harry Potter", "Spiderman", "Toy Story", "The Shawshank Redemption"];
  
  
  console.log(listUsersWithMovies2(users2, movies2));














  
   
  