// src/components/Community.jsx
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';

// Example data for neighborhood members
const members = [
    {
        profileImage: 'src/assets/suntonepictures/14B8667D-D542-4273-80A3-D7DD095EB97E.JPEG',
        name: 'Daniel Lueders',
        hometown: 'Peoria, IL',
        paddle: 'Franklin Signature',
        dominantHand: 'Right-handed',
        playLevel: 'Advanced',
    },
    {
        name: 'Rick Gordon',
        profileImage: 'src/assets/suntonepictures/79EC580D-FAF8-496E-AD9B-85FED6DDDC98.jpg',
        hometown: 'Indiana',
        paddle: 'Joola Perseus',
        dominantHand: 'Right-handed',
        playLevel: 'Intermediate',
    },
    {
        name: 'Craig Colasanti',
        profileImage: 'src/assets/suntonepictures/Resized Image.jpg',
        hometown: 'New York',
        paddle: 'Diadem Warrior Edge',
        dominantHand: 'Right-handed',
        playLevel: 'Intermediate',
    },
];

const Community = () => {
    return (
        <section className="bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Members</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={member.profileImage} alt={member.name} className="w-full h-[400px] object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-700 mb-2"><strong>Hometown:</strong> {member.hometown}</p>
                                <p className="text-gray-700 mb-2"><strong>Paddle: </strong> {member.paddle}</p>
                                <p className="text-gray-700 mb-2"><strong>Dominant Hand: </strong> {member.dominantHand}</p>
                                <p className="text-gray-600"><strong>Play Level: </strong>{member.playLevel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Community;
