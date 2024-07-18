import { House, fetchData } from '../page';

interface Character {
  url: string;
  name: string;
  died: string;
}

async function fetchSwornMembers({ membersUrls }: { membersUrls: string[] }) {
  if (!membersUrls || membersUrls.length === 0) {
    return [];
  }
  const members = await Promise.all(
    membersUrls.map((url) => fetchData({ url })),
  );

  return members.map((response) => response.data);
}

async function fetchHousesAndMembers({ houses }: { houses: House[] }) {
  const housesWithMembers = await Promise.all(
    houses.map(async (house) => {
      const members = await fetchSwornMembers({
        membersUrls: house.swornMembers,
      });
      return { ...house, swornMembers: members };
    }),
  );

  return { housesWithMembers };
}

async function Houses({ houses }: { houses: House[] }) {
  const { housesWithMembers } = await fetchHousesAndMembers({ houses });

  console.log('housesWithMembers', housesWithMembers);

  return (
    <div>
      <ul role="list" className="space-y-3"></ul>
    </div>
  );
}

export default Houses;
