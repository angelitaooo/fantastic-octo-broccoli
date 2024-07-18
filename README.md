This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies

```bash

pnpm install 
# or
yarn dev
```

then run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acceptance criteria
Please provide an application that satisfies the following criteria:

- Uses https://anapioficeandfire.com/ as a data source

- Is built using your tech stack of choice

- The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house

- For each Sworn Member display their full name and whether they are alive or dead

- If a character is dead, please display the information provided by the API about their death

- If a house has no Sworn Members, please display the message "This house has no sworn members"

- You are welcome to use tools like ChatGPT if that is a part of your daily workflow but please be prepared to defend your choice to use those tools and provide alternate methods if requested on review



## Challenges
It was a fun project, I was used to the Next.js pages router, and I had the opportunity to try the new app router, and learn a few things about it.

At the begining I was trying to check why all the characters were alive, and then I checked the API, and I found a bug in that "died" property, is always empty,
but anyway I added the check just in case it gets fixed, you can check this example: khal drogo should be dead
https://anapioficeandfire.com/api/characters/1346.

Also I wanted to add pagination, I wasnt sure if was part of the test, but then I checked in the API docs, the total pages is in the headers link,
it was a bit tricky to get that number from that string, but I got some help from chatGPT in that part.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
