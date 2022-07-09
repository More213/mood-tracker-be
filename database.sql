create TABLE user{
  uid SERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
}

create TABLE mood_record{
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES user (uid)
}