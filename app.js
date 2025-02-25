import { eq } from "drizzle-orm";
import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  //! 1️⃣ Insert :-
  //? Single User
  //   const insertUser = await db
  //     .insert(usersTable)
  //     .values({ name: "abc", age: 18, email: "abc@gmail.com" });
  //   console.log(insertUser);
  //? Multiple User
  //   const insertUsers = await db.insert(usersTable).values([
  //     { name: "alice", age: 18, email: "alice@gmail.com" },
  //     { name: "bob", age: 18, email: "bob@gmail.com" },
  //     { name: "charlie", age: 18, email: "charlie@gmail.com" },
  //   ]);
  //   console.log(insertUsers);

  //! 2️⃣ Read :-
  //   const users = await db.select().from(usersTable);
  //   const users = await db.select().from(usersTable).where({
  //     email: "abc@gmail.com",
  //   });
  //   console.log(users);

  //! 3️⃣ Update :-
  //? (Not Recommended)
  //   const updatedUser = await db
  //     .update(usersTable)
  //     .set({ email: "bobby@gmail.com" })
  //     .where({
  //       email: "bob@gmail.com",
  //     });
  //   console.log(updatedUser);

  //? (Recommended)
  //   const updatedUser = await db
  //     .update(usersTable)
  //     .set({ email: "bob@gmail.com" })
  //     .where(eq(usersTable.email, "bobby@gmail.com"));
  //   console.log(updatedUser);

  //! 4️⃣ Delete :-
  //   const deletedUser = await db.delete(usersTable).where({ email: "bob@gmail.com" });
  const deletedUser = await db
    .delete(usersTable)
    .where(eq(usersTable.email, "charlie@gmail.com"));
  console.log(deletedUser);
};

main().catch((error) => {
  console.log(error);
});
