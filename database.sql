create TABLE person(
  uid SERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
);

create TABLE mood_record(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  dateTime time with time zone,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (uid)
);