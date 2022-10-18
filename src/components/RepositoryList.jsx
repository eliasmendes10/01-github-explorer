import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  //0 - Se uma variável mudar a função é acionada
  //1 - se o segundo parametro for um array vazio [] ela irá executar uma única vez
  //2 - Nunca deixar sem o segundo parametro, pq o useEffect vai entrar em loop
  //3 - nunca alterar a o valor da variável que é o target também com a conseguencia de loop
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
