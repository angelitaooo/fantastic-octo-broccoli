import { House } from '../page';
import { fetchData } from '../utils';

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

  return (
    <div>
      <ul role="list" className="space-y-3">
        {housesWithMembers.map((house) => (
          <li
            key={house.url}
            className="overflow-hidden rounded-md bg-blue-50 px-6 py-4 shadow"
          >
            <h1 className="text-lg font-bold">{house.name}</h1>
            <h2 className="font-bold">Sworn Members:</h2>
            <ul>
              {house.swornMembers.length === 0
                ? 'This house has no sworn members'
                : house.swornMembers.map((member) => (
                    <li
                      key={member.url}
                      role="list"
                      className="flex justify-between"
                    >
                      <span>{member.name}</span>
                      <span>{member.died === '' ? 'Alive' : member.died}</span>
                    </li>
                  ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Houses;
