import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import styles from "../autocomplete/styles.module.scss";
import { API_PATH, CHARS_LIMIT, QUERY_PARAMS } from "../../constants";

export default function Autocomplete() {
  const [searchValue, setSearchValue] = useState("");

  const getSearchResults = () =>
    fetch(API_PATH + QUERY_PARAMS + searchValue).then((res) => res.json());

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", searchValue],
    queryFn: getSearchResults,
    enabled: searchValue.length >= CHARS_LIMIT,
  });

  const handleInput = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <>
      <section className={styles.autocomplete}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInput}
          placeholder="Type your request"
          className={styles.autocomplete__input}
        />
        {isError && <h2>{JSON.stringify(error)}</h2>}
        {!isLoading && !isError && (
          <ul className={styles.autocomplete__list}>
            {data.data.map((item) => (
              <li key={item.id} className={styles.autocomplete__li}>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
