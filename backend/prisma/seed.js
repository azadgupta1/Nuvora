import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const categories = [
  "Technology",
  "Sports",
  "Coding",
  "Languages",
  "Life Coach",
  "Art",
  "Music",
  "Others"
];

// Sample data pools to pick from for realism
const firstNames = [
  "Alice", "Bob", "Carol", "David", "Eva", "Frank", "Grace", "Henry",
  "Isabella", "Jack", "Karen", "Liam"
];

const lastNames = [
  "Johnson", "Smith", "Williams", "Brown", "Jones", "Garcia", "Miller",
  "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez"
];

const locations = [
  "New York, USA",
  "London, UK",
  "Berlin, Germany",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Toronto, Canada",
  "Paris, France",
  "São Paulo, Brazil"
];

const skillsPool = {
  Technology: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
  Sports: ["Basketball Coaching", "Yoga", "Tennis", "Running", "Fitness Training"],
  Coding: ["Algorithms", "Data Structures", "Python", "C++", "Java", "Rust"],
  Languages: ["English", "Spanish", "French", "German", "Japanese", "Mandarin"],
  "Life Coach": ["Mindfulness", "Career Advice", "Public Speaking", "Stress Management"],
  Art: ["Painting", "Sketching", "Photography", "Graphic Design", "Calligraphy"],
  Music: ["Guitar", "Piano", "Drums", "Singing", "Music Theory"],
  Others: ["Cooking", "Gardening", "DIY", "Writing", "Travel Planning"]
};

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSkills(category) {
  const offered = getRandomFromArray(skillsPool[category]).split(' ');
  const wantedCategory = getRandomFromArray(categories.filter(c => c !== category));
  const wanted = getRandomFromArray(skillsPool[wantedCategory]).split(' ');
  return {
    skillsOffered: offered,
    skillsWanted: wanted,
    wantedCategory,
  };
}

async function main() {
  const START_INDEX = 101;
  const TOTAL_USERS = 12;

  for (let i = 0; i < TOTAL_USERS; i++) {
    const userIndex = START_INDEX + i;

    const firstName = getRandomFromArray(firstNames);
    const lastName = getRandomFromArray(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${userIndex}@example.com`;
    const location = getRandomFromArray(locations);
    const category = getRandomFromArray(categories);
    const { skillsOffered, skillsWanted, wantedCategory } = generateSkills(category);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: 'test1234', // Not hashed (for testing only)
        profilePicture: `https://i.pravatar.cc/150?img=${(userIndex % 70) + 1}`,
        bio: `Hi, I’m ${fullName}, passionate about ${category.toLowerCase()} and eager to connect.`,
        location,
        dummyField: "temp"
      },
    });

    // Create skill related to the user
    await prisma.skill.create({
      data: {
        userId: user.id,
        skillsOffered,
        skillsWanted,
        category,
        description: `I offer expertise in ${skillsOffered.join(', ')} and want to improve my skills in ${skillsWanted.join(', ')}.`,
        image: `https://source.unsplash.com/400x300/?${category.toLowerCase()}`,
        duration: `${30 + (i * 10)} mins`,
        location: ['Online', 'In-Person'][i % 2],
        availability: {
          monday: true,
          wednesday: false,
          friday: true,
        },
      },
    });

    console.log(`✅ Seeded user ${userIndex} - ${fullName}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
